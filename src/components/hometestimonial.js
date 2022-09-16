import React from "react"
import styled from "styled-components"
import { Row, Text, Column } from "../theme"
import { Colors } from "../theme/styles"

const TestimonialWrapper = styled(Row)`
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 920px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
const StyledColumn = styled(Column)`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 920px) {
    width: 90%;
    align-items: center;
  }
`

const StyledText = styled(Text)`
text-align: ${props => props.center ? 'center' : 'left'};
margin-top: ${props => props.margintop ? '20px' : '0'};
color: ${Colors.green};
font-weight: ${props => props.bold ? 'bold' : 'inherit'};
  @media (max-width: 920px) {
    text-align: center;
    font-size: 18px;
  }
`

const HomeTestimonial = () => {
    return (
        <TestimonialWrapper>
        <StyledColumn>
          <StyledText bold center>Seller Testimonial By: Chet A.</StyledText>
          <StyledText margintop>"We absolutely loved working with the Living Loving Team. We selected them to sell our house in Clearwater in April 2022 because we were impressed with their energy and ideas for getting the most for our house. We were thrilled with the results. You should select the Living Loving Team if you want honest, multi-talented, high-energy realtors that listen to your needs and bring new and modern ideas."</StyledText>
        </StyledColumn>
      </TestimonialWrapper>
    )
}

export default HomeTestimonial;