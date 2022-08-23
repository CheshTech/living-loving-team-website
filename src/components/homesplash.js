import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Title, Subtitle, Column, Button, Row } from "../theme"
import { Cta } from "./cta"
import { Fonts, Responsive } from "../theme/styles"
import Modal from "./modal"
import {  StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin-top: 105px;
  @media (max-width: 850px) {
    margin-top: 155px;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: space-between;
  }
`

const HomeTitle = styled(Title)`
  font-size: 60px;
  color: #000;
  line-height: 1.2;
  @media (max-width: 1200px) {
    font-size: 48px;
  }
  @media (max-width: 980px) {
    font-size: 36px;
  }
`

const HomeSubtitle = styled(Subtitle)`
  font-size: 26px;
  line-height: 1.33;
  letter-spacing: 2px;
  color: #000;
  font-family: ${Fonts.sofiaBold};
`

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 500px;
  left: 150px;
  z-index: 100;
  h2 {
    width: 50%;
  }
  @media (max-width: 1200px) {
    font-size: 64px;
    left: 150px;
    width: 425px;
  }
  @media (max-width: 980px) {
    font-size: 48px;
    left: 100px;
  }
  @media (max-width: 850px) {
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    text-align: center;
    width: 75%;
    h2 {
      width: 100%;
      color: #000;
    }
  }
`

const StyledImageBox = styled(Column)`
  width: 75%;
  position: relative;
  @media (max-width: 850px) {
    width: 100%;
  }
`

const DesktopDiv = styled.div`
  @media (max-width: 850px) {
    display: none;
  }
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

const HomeSplash = () => {
  const [show, setShow] = useState(false)

  const toggleModal = () => {
    setShow(!show)
  }

  return (
    <Wrapper>
      <StyledColumn>
        <HomeTitle>
          We take the stress out of buying and selling your home!
        </HomeTitle>
        <HomeSubtitle>Tampa Bay’s premier real estate team</HomeSubtitle>
        <ButtonContainer justifycontent>
          <Link to="/schedule">
            <StyledButton>Contact Us</StyledButton>
          </Link>
          <Button onClick={() => toggleModal()}>Free Buyer/Seller Guide</Button>
        </ButtonContainer>
      </StyledColumn>
      <StyledImageBox>  
        <StaticImage src="../images/homehero.png" style={{ minHeight: "600px"}} loading="eager" />
        <DesktopDiv>
          <Cta type="home" />
        </DesktopDiv>
      </StyledImageBox>
      <Modal show={show} toggleModal={toggleModal} type="resources" />
    </Wrapper>
  )
}

export default HomeSplash
