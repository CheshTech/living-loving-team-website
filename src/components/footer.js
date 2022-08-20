import { Link } from "gatsby"
import logocolor from "../images/LLTSocialCard.png"
import React from "react"
import styled from "styled-components"
import { Text, Nav, Row, Column, IDXNav } from "../theme/index"
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa"
import { Colors } from "../theme/styles"

const Wrapper = styled.div`
  background: ${Colors.white};
  height: 250px;
  margin: 0 auto;
  padding: 1.5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 2.5em 0;
    justify-content: center;
    align-items: space-between;
  }
`

const Div = styled(Column)`
  @media (max-width: 920px) {
    margin-top: 0em;
    justify-content: center;
    flex-direction: column;
  }
`

const NavRow = styled(Row)`
  align-items: center;
  margin: 0.5em 0;
  @media (max-width: 920px) {
    margin: 1em auto;
  }
`

const Logo = styled.img`
  width: 150px;
  @media (max-width: 920px) {
    width: 100px;
  }
`

const StyledRow = styled(Row)`
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledText = styled(Text)`
  align-self: flex-end;
  color: #000;
  opacity: 0.6;
  @media (max-width: 920px) {
    align-self: center;
    font-size: 8px;
  }
`

const Footer = () => (
  <Wrapper>
    <StyledRow>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Logo src={logocolor} />
      </Link>

      <Div>
        <NavRow>
          <Nav
            black={1}
            to="/"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Home
          </Nav>
          <Nav
            black={1}
            to="/about"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            About
          </Nav>
          <IDXNav
            black={1}
            href="https://livinglovingteam.idxbroker.com/idx/featured"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Listings
          </IDXNav>
          <Nav
            black={1}
            to="/neighborhoods"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Neighborhoods
          </Nav>
          <Nav
            black={1}
            to="/testimonials"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Testimonials
          </Nav>
          <Nav
            right
            black={1}
            to="/blog"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Blog
          </Nav>
          {/* <Nav
            black={1}
            right={1}
            to="/schedule"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Schedule
          </Nav> */}
        </NavRow>
        <NavRow style={{ alignSelf: "flex-end" }}>
          <a
            href="https://www.facebook.com/TheLivingLovingTeam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              style={{
                color: "#000",
                marginRight: ".5em",
                fontSize: "1.25em",
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/livinglovingteam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              style={{
                color: "#000",
                marginRight: ".5em",
                fontSize: "1.25em",
              }}
            />
          </a>

          <a
            href="https://www.linkedin.com/company/living-loving-team"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              style={{
                color: "#000",
                fontSize: "1.25em",
                marginRight: ".5em",
              }}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCfaWdjiFV0PTMTwWbo1BEVw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              style={{
                color: "#000",
                fontSize: "1.5em",
              }}
            />
          </a>
        </NavRow>
        <StyledText small>
          Living Loving Team © {new Date().getFullYear()}
        </StyledText>
      </Div>
    </StyledRow>
  </Wrapper>
)

export default Footer
