import React from "react"
import { graphql } from "gatsby"
import WordsList from "../components/WordsList"
import Layout from "../components/Layout"

// import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const words = data.allContentfulWord.nodes

  return (
    <Layout>
      {/*<SEO title={pageContext.tag} />*/}
      <h2 className="center">
        {`${pageContext.tag} (${data.allContentfulWord.totalCount})`}
      </h2>
      <p></p>
      <div className="tag-recipes">
        <WordsList words={words} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetWordByTag($tag: String) {
    allContentfulWord(
      sort: { fields: english, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        english
        japanese
        romaji
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
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

export default TagTemplate
