import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import slugify from "slugify"
// import SEO from "../components/SEO"

const WordTemplate = ({ data }) => {
  const { english, japanese, romaji, content, image } = data.contentfulWord
  const pathToImage = getImage(image)
  const { tags } = content
  return (
    <Layout>
      {/* <SEO title={title} description={description} /> */}
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={english}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{english}</h2>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <h5>japanese</h5>
                  <p>{japanese}</p>
                </article>
                <article>
                  <h5>romaji</h5>
                  <p>{romaji}</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags :
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })

                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleWord($english: String) {
    contentfulWord(english: { eq: $english }) {
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
  }
`

export default WordTemplate
