import React, { useState, Fragment } from "react"
import { Row, Text, Title, Column, Button, Container } from "../theme"
import { Colors, Responsive } from "../theme/styles"
import styled from "styled-components"
import { Link } from "gatsby"
import "./layout.css"
import Modal from "./modal"
import freebie from "../images/LLTFreebie.png"
import buyerFreebie from "../images/LLT Home Buying Guide.png"

const Image = styled.img`
  border-radius: 5px;
  box-shadow: 10px 5px 5px ${Colors.green};
`

const SuccessBackground = styled.div`
  height: ${props => (props.freebie ? "100%" : "100vh")};
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background: ${Colors.offWhite};
  // align-items: center;
  flex-direction: column;
  padding: ${props => props.padding || "0"};
  &::after {
    background-position: center;
    background-size: contain;
  }
  @media (max-width: 1023px) {
    height: 100%;
    justify-content: center;
    padding: ${props => props.padding || "50px 0"};
  }
`

const Grid = styled.div`
  ${Responsive.sm`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${props => (props.margintop ? "50px" : 0)};
  padding: ${props => props.padding || "0"};
  `}
  ${Responsive.lg`
  grid-template-columns: repeat(2, 50%);
  width: 100%;
  display: grid;
  grid-gap: 50px;
  align-items: center;
  padding: ${props => props.padding || "0"};
  `}
`

const FreebieColumn = styled(Column)`
  ${Responsive.sm`
    width: 70%;
    margin-bottom: 50px;
  `}
  ${Responsive.md`
    width: 90%;
`}
  ${Responsive.lg`
    margin-bottom: 0px;
  `}
  ${Responsive.xlg`
  width: 70%;
  align-items: center;
  margin: 0 auto;
  `}
`

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 90%;
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const StyledButton = styled(Button)`
  ${Responsive.sm`
margin-right: 0px;
margin-bottom: 10px;
`}
  ${Responsive.lg`
margin-right: 10px;
margin-bottom: 0px;
`}
`

const ButtonContainer = styled(Row)`
  ${Responsive.sm`
justify-content: ${props => (props.justifycontent ? "center" : "center")};
align-items: center;
flex-direction: column;
margin-top: 20px;
`}
  ${Responsive.lg`
flex-direction: row;
justify-content: ${props => (props.justifycontent ? "flex-start" : "center")};
align-items: center;
`}
`

const StyledContainer = styled(Container)`
  ${Responsive.sm`
    padding: 0; 
  `}
  ${Responsive.lg`
  padding: 75px 0;
  `}
`

const StyledLi = styled.li`
  color: ${Colors.green};
  font-size: 18px;
`

const StyledText = styled(Text)`
  // margin: 34px 0;
  color: ${Colors.green};
  font-size: 18px;
`

const StyledTitle = styled(Title)`
  ${Responsive.sm`
font-size: 32px;
text-align: center;
margin: 0;
`}
  ${Responsive.lg`
font-size: 48px;
`}
`

const LandingHero = ({ title, type }) => {
  const [show, setShow] = useState(false)

  const toggleModal = () => {
    setShow(!show)
  }

  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "neighborhoods_splash.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <SuccessBackground freebie>
      <StyledContainer>
        <Column margin="0 0 50px 0" alignitems="center">
          <StyledTitle>{title}</StyledTitle>
        </Column>
        <Grid>
          {type === "buyer" && (
            <Fragment>
              <FreebieColumn>
                <Image
                  src={buyerFreebie}
                  alt="Web With Will Fitness Website Guide"
                  placeholder="blurred"
                />
              </FreebieColumn>
              <TextColumn>
                <StyledText>
                  Finding the Right Home at the Right Price Matters. The Tampa
                  Bay Area's real estate market is hot. And no wonder, it’s the
                  best place to live in the entire country... so everyone wants
                  in on the action. We've put together a guide to help you find
                  the home you want and start the next chapter of your life.
                  Included in this guide is info such as:
                </StyledText>
                <Column margin="20px 0 15px 0">
                  <ul style={{ marginBottom: "0" }}>
                    <StyledLi>Steps in the Buyer Process</StyledLi>
                    <StyledLi>
                      What Costs are Associated with Buying a Property?{" "}
                    </StyledLi>
                    <StyledLi>Anatomy of an Offer </StyledLi>
                    <StyledLi>
                      Typical Timeline of the Purchase Process
                    </StyledLi>
                  </ul>
                </Column>
                <StyledText>
                  The Living Loving Team Home Buying Guide is packed with info
                  to get you on your way to finding your home in our vibrant
                  Tampa Bay Region!
                </StyledText>
                <ButtonContainer justifycontent>
                  <StyledButton white onClick={() => toggleModal()}>
                    Access Now
                  </StyledButton>
                  <Link to="/">
                    <Button white>Go To Home Page</Button>
                  </Link>
                </ButtonContainer>
              </TextColumn>
            </Fragment>
          )}
          {type === "seller" && (
            <Fragment>
              <FreebieColumn>
                <Image
                  src={freebie}
                  alt="Web With Will Fitness Website Guide"
                  placeholder="blurred"
                />
              </FreebieColumn>
              <TextColumn>
                <StyledText>
                  Are you curious about what is needed to sell your home in the
                  Tampa Bay Area? If you said, "That's easy! A sign in my yard."
                  You are likely missing out on how to get the most $$$ for your
                  home. Sign up for our free Tampa Bay Seller Guide! We have a
                  unique selling process and we are willing to share some of our
                  secrets with you. Included in this guide:
                </StyledText>
                <Column margin="20px 0 15px 0">
                  <ul style={{ marginBottom: "0" }}>
                    <StyledLi>
                      Learn our 3 key elements of home preparation
                    </StyledLi>
                    <StyledLi>Content to help you price your home </StyledLi>
                    <StyledLi>Plus, how to market your home to sell</StyledLi>
                  </ul>
                </Column>
                <StyledText>
                  If in addition, you would like a free market analysis of your
                  home, you can also call us at 813-922-1179 to book an
                  appointment!
                </StyledText>
                <ButtonContainer justifycontent>
                  <StyledButton white onClick={() => toggleModal()}>
                    Access Now
                  </StyledButton>
                  <Link to="/">
                    <Button white>Go To Home Page</Button>
                  </Link>
                </ButtonContainer>
              </TextColumn>
            </Fragment>
          )}
        </Grid>
        <Modal
          type="landing"
          show={show}
          toggleModal={toggleModal}
          height="auto"
        ></Modal>
      </StyledContainer>
    </SuccessBackground>
  )
}

export default LandingHero
// <StaticImage
//   src="../images/websiteguide.png"
//   alt="Web With Will Fitness Website Guide"
//   placeholder="blurred"
//   style={{
//     borderRadius: "5px",
//     // height: "400px",
//     // width: "310px",
//   }}
// />
//   <Mailchimp type="form" />
