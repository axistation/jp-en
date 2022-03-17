import React from "react"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const query = graphql`
  {
    allContentfulWord(sort: { fields: english, order: ASC }) {
      nodes {
        id
        english
        japanese
        romaji
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Menubar = () => {
  const data = useStaticQuery(query)
  const words = data.allContentfulWord.nodes
  return (
    <Wrapper>
      <div className="menubar center sticky">
        <TagsList words={words} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .menubar {
    background-color: #fff;
    overflow: auto;
    white-space: nowrap;
    box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.4);
  }
`

export default Menubar
