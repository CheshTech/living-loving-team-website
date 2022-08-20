import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Text } from "../theme/index"

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: ${props => props.background};
  border: 1.5px solid transparent;
  transition: 250ms;
  border-radius: 8px;
  @media (min-width: 920px) {
    &:hover {
      transform: translateY(-10px);
    }
  }
`

const BlogImage = styled(GatsbyImage)`
  width: 260px;
  height: 180px;
  object-fit: contain;
  background-size: cover;
  background-position: center;
`

export const BlogLink = ({ post, type }) => {

  return (
    <Link to={`/blog/${post.slug}`}>
      <BlogWrapper background={type === "blogpg" ? "#fff" : "#f8f8f8"}>
        <BlogImage
          alt={`William W Whatley ${post.title} Portfolio Image`}
          image={getImage(post.heroImage.gatsbyImageData)}
        />
        <div style={{ alignContent: "flex-start" }}>
          <Text blogsubtitle>BLOG</Text>
          <Text blogtitle small>
            {post.title}
          </Text>
        </div>
      </BlogWrapper>
    </Link>
  )
}
