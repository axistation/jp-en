import React from "react"
import WordsList from "./WordsList"
import { graphql, useStaticQuery } from "gatsby"

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
        audio {
          file {
            url
          }
        }
      }
      totalCount
    }
  }
`

const AllWords = () => {
  const data = useStaticQuery(query)
  const words = data.allContentfulWord.nodes

  return (
    <section className="">
      <h2 className="center">{`All (${data.allContentfulWord.totalCount})`}</h2>
      <WordsList words={words} />
    </section>
  )
}

export default AllWords
