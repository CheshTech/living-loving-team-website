import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Ratings from "../components/ratings"
import { Row, Text, Subtitle, Column } from "../theme"
import { graphql, StaticQuery } from "gatsby"
import dayjs from "dayjs"
import { getImage } from "gatsby-plugin-image";
import FooterCTA from "../components/footercta"

// const BlogImage = styled(Img)`
//   width: 260px;
//   height: 180px;
//   object-fit: contain;
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 920px) {
//     margin-bottom: 26px;
//     width: 95%;
//   }
// `

const Div = styled(Column)`
  width: 85%;
  margin: 0 auto;
  margin-top: 60px;
`

const TestimonialWrapper = styled(Row)`
  margin-bottom: 60px;
  justify-content: space-between;
  @media (max-width: 920px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const StyledColumn = styled(Column)`
  width: 65%;
  @media (max-width: 920px) {
    width: 95%;
  }
`

const Testimonial = ({ post }) => {
  const handleNullAuthor = () => {
    if (post.author === null) {
      return (
        <Text margin="0 12px 0 0" green>
          By: Client
        </Text>
      )
    } else {
      return (
        <Text margin="0 12px 0 0" green>
          {`By: ${post.author}`}
        </Text>
      )
    }
  }

  const nullAuthor = handleNullAuthor()

  return (
    <TestimonialWrapper>
      <StyledColumn>
        <Subtitle>{post.title}</Subtitle>
        <Row>
          {nullAuthor}
          <Text>{dayjs(post.publishDate).format("MM/DD/YYYY")}</Text>
        </Row>
        <Text margin="26px 0 0 0">{post.body.body}</Text>
      </StyledColumn>
      {/* <BlogImage fluid={post.heroImage.fluid} /> */}
    </TestimonialWrapper>
  )
}

const Testimonials = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "testimonials_splash.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData( quality: 100, placeholder: TRACED_SVG) 
          }
        }
        allContentfulTestimonial(sort: { order: DESC, fields: publishDate }) {
          edges {
            node {
              id
              title
              publishDate
              body {
                body
              }
              author
            }
          }
        }
      }
    `}
    render={data => {
      const heroImage = getImage(data.placeholderImage)
      return (
        <Layout
          type="testimonials"
          img={heroImage}
          title="Testimonials"
          loading="eager"
        >
          <Seo
            title="Living Loving Team Testimonials"
            description="Reviews on the best realtors in Tampa! Hear from our happy clients."
          />
          <Ratings type="testimonialPage" />
          <Div>
            {data.allContentfulTestimonial.edges.map(edge => (
              <Testimonial key={edge.node.id} post={edge.node} />
            ))}
          </Div>
          <FooterCTA />
        </Layout>
      )
    }}
  />
)

export default Testimonials
// <Row margin="30px 0 0 0" justifycontent="center">
//   <SEOTitle textAlign="center">
//     Rated 4.9 out of 5 Stars On More Than 50 Reviews
//   </SEOTitle>
// </Row>
// <Grid>
//   {icons.map((key, index) => {
//     return (
//       <StyledColumn2 margintop key={index}>
//         <Row margin="0 0 15px 0">{key.icon}</Row>
//         <Subtitle
//           style={{ color: `${Colors.fawn}` }}
//           textAlign="center"
//         >
//           {key.subtitle}
//         </Subtitle>
//       </StyledColumn2>
//     )
//   })}
// </Grid>
