import React from "react"
import styled from "styled-components"
import { Subtitle, SEOTitle, Column, Container } from "../theme"
import {  Responsive } from "../theme/styles"
import Mailchimp from "./mailchimp"
import { StaticImage } from "gatsby-plugin-image"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  gap: 75px;
  width: 100%;
  margin-top: 50px;
  justify-content: center;
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, 300px);
  }
`

const StyledText = styled(Subtitle)`
  ${Responsive.sm`
margin: 0 0 15px 0;
width: 100%;
text-align: center;
`}
  ${Responsive.lg`
width: 100%;
`}
`

const FreebieColumn = styled(Column)`
  ${Responsive.sm`
    width: 100%;
    margin-bottom: 0;
  `}
  ${Responsive.md`
    width: 90%;
`}
  ${Responsive.lg`
    margin-bottom: 0px;
  `}
  ${Responsive.xlg`
  width: 100%;
  align-items: center;
  margin: 0 auto;
  `}
`

const LeadMagnet = () => {
  return (
    <Container>
      <Column margin="75px auto">
        <SEOTitle textAlign="center">
          Download Our Free Seller's/Buyer's Guide!
        </SEOTitle>
        <Grid>
          <FreebieColumn>
            <StaticImage
              src="../images/LLTFreebieGuides2.png"
              alt="Living Loving Team Buying and Selling Guides"
              placeholder="blurred"
            />
          </FreebieColumn>
          <Column>
            <StyledText>
              Learn the preparation, promotion and pricing elements to set
              yourself up for success in the real estate market.
            </StyledText>
            <Mailchimp />
          </Column>
        </Grid>
      </Column>
    </Container>
  )
}
export default LeadMagnet
