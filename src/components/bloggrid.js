import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery, navigate } from "gatsby"
import { Text, Button, SEOTitle } from "../theme/index"
import { BlogLink } from "./bloglink"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 96px 0 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${props => props.background};
  @media (max-width: 920px) {
    padding: 2em;
    margin: 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  width: 85%;
  margin: 60px auto;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-auto-rows: auto;
  @media (max-width: 920px) {
    grid-auto-rows: auto;
    width: 100%;
  }
`

const BlogGrid = ({ type }) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBlogPost(limit: 4, sort: {fields: publishDate, order: DESC}) {
          edges {
            node {
              id
              title
              slug
              publishDate
              heroImage {
                gatsbyImageData(resizingBehavior: SCALE)
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Wrapper background={type === "post" ? "#fff" : "#f8f8f8"}>
          {type !== "post" && (
            <>
              <SEOTitle margin="0 0 6px 0">Our unmatched Expertise</SEOTitle>

              <Text margin="0">
                See how our work has put hundreds of families in the right
                homes.
              </Text>
            </>
          )}
          <Grid>
            {data.allContentfulBlogPost.edges.map(edge => (
              <BlogLink
                type={type === "post" && "blogpg"}
                key={edge.node.id}
                post={edge.node}
              />
            ))}
          </Grid>
          {type !== "post" && (
            <Button onClick={() => navigate("/blog")}>View all</Button>
          )}
        </Wrapper>
      )
    }}
  />
)

export default BlogGrid
