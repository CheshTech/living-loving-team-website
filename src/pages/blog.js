import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FooterCTA from "../components/footercta"
import { Row, SEOTitle } from "../theme"
import { graphql, StaticQuery } from "gatsby"
import { BlogLink } from "../components/bloglink"
import { getImage } from "gatsby-plugin-image";

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 85%;
  margin: 60px auto;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-auto-rows: auto;
  @media (max-width: 920px) {
    grid-auto-rows: auto;
    width: 95%;
    grid-gap: 15px;
  }
`

const StyledRow = styled(Row)`
  width: 82%;
  margin: 60px auto 0 auto;
  @media (max-width: 920px) {
    justify-content: center;
  }
`

const Blog = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "blog_splash.jpg" }) {
          childImageSharp {
            gatsbyImageData( quality: 100, placeholder: TRACED_SVG) 
          }
        }
        allContentfulBlogPost {
          edges {
            node {
              id
              title
              slug
              createdAt

              heroImage {
                gatsbyImageData(resizingBehavior: SCALE)
              }
            }
          }
        }
      }
    `}
    
    render={data => {
      const heroImage = getImage(data.placeholderImage)
      return (
        <Layout
          type="blog"
          img={heroImage}
          title="Blog"
          loading="eager"
        >
          <Seo
            title="Blog"
            description="The best tips to help you find your new home in the Tampa Bay real estate market"
          />
          <StyledRow>
            <SEOTitle>Recent posts</SEOTitle>
          </StyledRow>
          <Grid>
            {data.allContentfulBlogPost.edges.map(edge => (
              <BlogLink type="blogpg" key={edge.node.id} post={edge.node} />
            ))}
          </Grid>
          <FooterCTA type="blog" />
        </Layout>
      )
    }}
  />
)

export default Blog
