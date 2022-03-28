import React, { useState, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
// import slugify from "slugify"

import styled from "styled-components"

const WordsList = ({ words = [] }) => {
  const count = 50

  const [searchField, setSearchField] = useState("")
  const [newWords, setNewWords] = useState(words.slice(0, count))
  const myAudio = useRef("")

  // const filteredWords = words.filter(word => {
  //   return (
  //     word.english.toLowerCase().startsWith(searchField) ||
  //     word.japanese.toLowerCase().startsWith(searchField) ||
  //     word.romaji.toLowerCase().startsWith(searchField)
  //   )
  // })

  const handleSearchChange = event => {
    const searchField = event.target.value.toLowerCase()
    setSearchField(searchField)
    if (searchField !== "") {
      const results = words.filter(word => {
        return (
          word.english.toLowerCase().includes(searchField) ||
          word.japanese.toLowerCase().includes(searchField) ||
          word.romaji.toLowerCase().includes(searchField)
        )
      })
      setNewWords(results.slice(0, count))
    } else {
      setNewWords(words.slice(0, count))
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const handleAudio = async url => {
    myAudio.current.src = url
    await sleep(600)
    myAudio.current.play()
  }

  const randNewWords = newWords =>
    newWords
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value)

  const randWords = randNewWords(newWords)

  return (
    <Wrapper>
      <audio ref={myAudio} src={""} />

      <div className="search-container">
        <input
          className="search-box"
          type="search"
          placeholder="search english, japanese, or romaji"
          onChange={handleSearchChange}
        />
      </div>
      <p className="text">{`showing at most ${count} results in random order`}</p>

      <div className="wrapper">
        {randWords.map(word => {
          const { id, english, japanese, romaji, image, audio } = word

          const pathToImage = getImage(image)

          return (
            <div
              className="card"
              onClick={() => handleAudio(audio.file.url)}
              key={id}
            >
              {/*<Link key={id} to={`/${slug}`}>*/}
              <GatsbyImage image={pathToImage} className="img" alt={english} />
              <p>
                <b>{english}</b> | {japanese} | {romaji}
              </p>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .wrapper {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  .card {
    color: var(--textNormal);
  }
  .card:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  .img {
    width: 100%;
  }
  p {
    padding-top: 0.3rem;
    padding-top: 0.3rem;
    font-size: 0.9rem;
  }
  .text {
    padding-bottom: 0.5rem;
    color: var(--textNormal);
    text-transform: lowercase;
  }
  .search-container {
    margin: 0 0 1rem 0;
    text-align: center;
  }
  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #999;
    border-radius: 0;
    background: var(--searchBg);
    color: var(--textNormal);
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: var(--textNormal);
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: var(--textNormal);
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: var(--textNormal);
    }
    text-transform: none;
  }
`

export default WordsList
