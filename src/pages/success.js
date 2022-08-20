import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Title, Button, Subtitle, Column, Row, Container } from "../theme/index"
import { Responsive, Colors } from "../theme/styles"
import LLT from "../images/about_splash.jpg"

const Image = styled.img`
  border-radius: 5px;
  box-shadow: 10px 5px 5px ${Colors.green};
`

const SuccessBackground = styled.div`
  height: ${props => (props.freebie ? "100%" : "100vh")};
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background: ${Colors.darkBlue};
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

const StyledSubtitle = styled(Subtitle)`
  ${Responsive.sm`
text-align: ${props => props.textAlign || "center"};
font-size: ${props => (props.fontsize ? "20px" : "18px")};
`}
  ${Responsive.lg`
  text-align: left;
  font-size: ${props => (props.fontsize ? "44px" : "32px")};
  `}
`

const StyledColumn = styled(Column)`
  ${Responsive.sm`
width: 40%;
align-items: center;
margin-bottom: 30px;
`}
  ${Responsive.md`
width: ${props => (props.width ? "25%" : "40%")};
`}
  ${Responsive.lg`
  width: 60%;
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

const StyledTitle = styled(Title)`
  ${Responsive.sm`
margin: 0;
color: ${Colors.white};
text-align: center;
font-size: ${props => (props.fontsize ? "28px" : "24px")};
`}
  ${Responsive.lg`
text-align: left;
font-size: ${props => (props.fontsize ? "44px" : "36px")};
`}
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
margin-top: 15px;
`}
  ${Responsive.lg`
flex-direction: row;
justify-content: ${props => (props.justifycontent ? "flex-start" : "center")};
align-items: center;

`}
`

const Success = () => {
  return (
    <SuccessBackground>
      <Container>
        <Grid>
          <StyledColumn width>
            <Image
              src={LLT}
              alt="CheshTech CEO Will Cheshier"
              style={{
                borderRadius: "5px",
                // height: "400px",
                // width: "310px",
              }}
            />
          </StyledColumn>
          <TextColumn>
            <StyledTitle fontsize>Congratulations!</StyledTitle>
            <StyledSubtitle margin="44px 0 44px 0">
              Your guide to real estate is heading to your mailbox. Keep an eye
              on your inbox as you'll hear from us shortly!
            </StyledSubtitle>
            <ButtonContainer justifycontent>
              <Link to="/schedule">
                <StyledButton background={Colors.lightBlue}>
                  Contact Us
                </StyledButton>
              </Link>
              <Link to="/">
                <Button background={Colors.lightBlue}>Go Home</Button>
              </Link>
            </ButtonContainer>
          </TextColumn>
        </Grid>
      </Container>
    </SuccessBackground>
  )
}

export default Success
