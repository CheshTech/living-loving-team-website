import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Row, Button, Subtitle, SEOTitle, Column, Container } from "../theme"
import { Colors } from "../theme/styles"
import { SiZillow } from "react-icons/si"
import { GrGoogle } from "react-icons/gr"
import { GiHouse } from "react-icons/gi"

const Grid = styled.div`
  @media (max-width: 769px) {
    margin: 0px auto 80px auto;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  width: 80%;
  display: grid;
  grid-gap: 15px;
  margin: 30px auto 80px auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
`

const StyledColumn2 = styled(Column)`
  @media (max-width: 767px) {
    margin-top: ${props => (props.margintop ? "0px" : 0)};
  }
  margin-top: ${props => (props.margintop ? "0px" : 0)};
  align-items: center;
`

const BoxWrapper = styled.div`
  width: 100%;
  background: #000;
  border-radius: 5px;
  padding: 24px;
`

const Ratings = ({ type }) => {
  const icons = [
    {
      icon: <SiZillow size={80} color={Colors.offWhite} />,
      subtitle: "4.9 Rating on Zillow",
    },
    {
      icon: <GrGoogle size={80} color={Colors.offWhite} />,
      subtitle: "5.0 Rating on Google",
    },
    {
      icon: <GiHouse size={80} color={Colors.offWhite} />,
      subtitle: "Over 150 Homes Sold",
    },
  ]

  return (
    <Container>
      <Column alignitems="center">
        <Row margin="30px 0 0 0" justifycontent="center">
          <SEOTitle textAlign="center">
            Rated 4.9 out of 5 Stars On More Than 50 Reviews
          </SEOTitle>
        </Row>
        <Grid>
          {icons.map((key, index) => {
            return (
              <BoxWrapper>
                <StyledColumn2 margintop key={index}>
                  <Row margin="0 0 15px 0">{key.icon}</Row>
                  <Subtitle textAlign="center" white>
                    {key.subtitle}
                  </Subtitle>
                </StyledColumn2>
              </BoxWrapper>
            )
          })}
        </Grid>
        {type !== "testimonialPage" && (
          <Link to="/testimonials">
            <Button>View Testimonials</Button>
          </Link>
        )}
      </Column>
    </Container>
  )
}
export default Ratings
