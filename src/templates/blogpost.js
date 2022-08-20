import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BlogGrid from "../components/bloggrid"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const Information = styled.div`
  height: 100%;
  width: 40%;
  margin: 0 auto;
  margin-top: 3em;
  padding: 0 0.1em;
  max-width: 730px;
  @media (max-width: 1160px) {
    width: 50%;
  }
  @media (max-width: 960px) {
    width: 60%;
  }
  @media (max-width: 720px) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`

const Portfolio = ({ data }) => {
  const {
    contentfulBlogPost: {
      body: { childMarkdownRemark: html },
    },
  } = data
  const { heroImage } = data.contentfulBlogPost

  return (
    <Layout type="post" img={heroImage.fluid}>
      <div className="fadeIn">
        <Wrapper>
          <Information
            className="portfolio"
            dangerouslySetInnerHTML={{ __html: html.html }}
          />
        </Wrapper>
      </div>

      <BlogGrid type="post" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt
      heroImage {
        gatsbyImageData
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Portfolio
