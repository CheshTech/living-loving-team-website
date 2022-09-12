import React from "react"
import styled from "styled-components"
import { Row, Text, Subtitle, Column, SEOTitle, Button } from "../theme"
import { Colors } from "../theme/styles"
import { Link } from "gatsby"

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

const TestimonialWrapper = styled(Row)`
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 920px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const Box = styled.div`
background: ${Colors.lightGrey};
// opacity: 0.7;
padding: 40px;
border: 2px solid ${Colors.fawn};
border-radius: 5px;
`

const StyledColumn = styled(Column)`
  width: 50%;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 920px) {
    width: 85%;
  }
`

const HomeTestimonial = () => {
    return (
        <TestimonialWrapper>
        <StyledColumn>
            <SEOTitle textAlign="center">What our clients say about us</SEOTitle>
        <Box>
          <Subtitle><i>"Thrilled by the results of this team's service"</i></Subtitle>
          <Text green>By: Chet A.</Text>
          <Text margin="26px 0 0 0" green>We absolutely loved working with the Living Loving Team. We selected them to sell our house in Clearwater in April 2022 because we were impressed with their energy and ideas for getting the most for our house. We were thrilled with the results. You should select the Living Loving Team if you want honest, multi-talented, high-energy realtors that listen to your needs and bring new and modern ideas.</Text>
          <Link to="/testimonials">
            <Button margin="12px 0 0 0">View Testimonials</Button>
          </Link>
          </Box>
        </StyledColumn>
      </TestimonialWrapper>
    )
}

export default HomeTestimonial;