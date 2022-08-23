import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import logocolor from "../images/newlogocolor.png"
import logowhite from "../images/newlogowhite.png"
import styled from "styled-components"
import { Nav, IDXNav, Row } from "../theme/index"
import { Colors } from "../theme/styles"

const Wrapper = styled.div`
  background: ${props => props.background};
  box-shadow: ${props => props.active && "0 0 10px rgba(0, 0, 0, 0.1)"};
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100000;
  transition: 250ms;
  @media (max-width: 720px) {
    height: 150px;
  }
`

const Div = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`

const Logo = styled.img`
  width: 350px;
  @media (max-width: 720px) {
    width: 200px;
    margin-bottom: 12px;
  }
`

const Navigation = ({ type }) => {
  const [color, setNavColor] = useState("rgba(0,0,0,0)")
  const [active, setActive] = useState(false)

  const listenScrollEvent = () => {
    if (window.scrollY > 25) {
      setNavColor("#fff")
      setActive(true)
    } else {
      setNavColor("rgba(0,0,0,0)")
      setActive(false)
    }
  }

  const handleLogo = type => {
    let logo
    if (type === "home") {
      logo = logocolor
    } else if (type !== "home" && active) {
      logo = logocolor
    } else {
      logo = logowhite
    }
    return logo
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  }, [])

  const currentLogo = handleLogo(type)

  return (
    <Wrapper background={color} active={active ? 1 : 0}>
      <Div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo src={currentLogo} />
        </Link>
        <Row alignitems="center">
          <Nav
            home={type === "home" ? 1 : 0}
            active={active ? 1 : 0}
            to="/"
            activeStyle={{
              color: Colors.fawn,
              // borderBottom: "3px solid #754D63",
              borderRadius: 2,
            }}
          >
            Home
          </Nav>

          <Nav
            home={type === "home" ? 1 : 0}
            active={active ? 1 : 0}
            to="/about"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            About
          </Nav>
          <IDXNav
            home={type === "home" ? 1 : 0}
            active={active ? 1 : 0}
            href="https://livinglovingteam.idxbroker.com/idx/featured"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Listings
          </IDXNav>
          <Nav
            home={type === "home" ? 1 : 0}
            active={active ? 1 : 0}
            to="/neighborhoods"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Neighborhoods
          </Nav>
          <Nav
            home={type === "home" ? 1 : 0}
            active={active ? 1 : 0}
            to="/schedule"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Contact
          </Nav>
          <Nav
            home={type === "home" ? 1 : 0}
            active={active ? 1 : 0}
            to="/blog"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Blog
          </Nav>
          {/* <Nav
            right={1}
            home={type === "home" ? 1 : 0}
            active={active ? 1 : 0}
            to="/schedule"
            activeStyle={{
              color: Colors.fawn,
            }}
          >
            Schedule
          </Nav> */}
        </Row>
      </Div>
    </Wrapper>
  )
}

export default Navigation
// <Nav
//   home={type === "home" ? 1 : 0}
//   active={active ? 1 : 0}
//   to="/testimonials"
//   activeStyle={{
//     color: Colors.fawn,
//   }}
// >
//   Testimonials
// </Nav>
