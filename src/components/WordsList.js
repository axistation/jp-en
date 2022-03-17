import React, { useState, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
// import slugify from "slugify"

import styled from "styled-components"

const WordsList = ({ words = [] }) => {
  const [searchField, setSearchField] = useState("")

  const myAudio = useRef("")

  const filteredWords = words.filter(word => {
    return (
      word.english.toLowerCase().includes(searchField) ||
      word.japanese.toLowerCase().includes(searchField) ||
      word.romaji.toLowerCase().includes(searchField)
    )
  })

  const handleSearchChange = event => {
    const searchField = event.target.value.toLowerCase()
    setSearchField(searchField)
  }

  const handleAudio = url => {
    myAudio.current.src = url
    myAudio.current.play()
  }

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

      <div className="wrapper">
        {filteredWords.map(word => {
          const { id, english, japanese, romaji, image, audio } = word

          const pathToImage = getImage(image)
          const audioUrl = audio.file.url

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
    color: #333;
  }
  .card:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  .img {
    width: 100%;
  }
  p {
    padding-top: 0.6rem;
    font-size: 0.9rem;
  }
  .search-container {
    margin: 0 0 1.6rem 0;
    text-align: center;
  }
  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #999;
    border-radius: 0;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #bbb;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #bbb;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #bbb;
    }
    text-transform: none;
  }
`

export default WordsList
