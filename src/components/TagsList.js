import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"
import { IoMdReturnLeft } from "react-icons/io"

import styled from "styled-components"

const TagsList = ({ words }) => {
  const newTags = setupTags(words)
  return (
    <Wrapper>
      <div className="menubar">
        <Link to="/">
          <div className="back">✨</div>
        </Link>

        <div className="rest">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })

            return (
              <Link to={`/tags/${slug}`} key={index}>
                {text}
              </Link>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .menubar .rest a {
    display: inline-block;
    text-align: center;
    padding: 1rem 0.5rem;
    text-decoration: none;
    opacity: 0.5;
  }

  .menubar a:hover,
  .back:hover {
    opacity: 1;
  }

  .back {
    display: inline-block;
    background: var(--bg);
    position: sticky;
    left: 0;
    padding: 1rem;
    box-shadow: 5px 0px 5px -5px rgba(0, 0, 0, 0.4);
    z-index: 99;
  }
  .rest {
    display: inline-block;
  }
`

export default TagsList
