import React from "react"
import styled, { css } from "styled-components"
import mobileicon from "../images/mobile.svg"
import { Link } from "gatsby"
import { Fonts } from "../theme/styles"

const Wrapper = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 52px;
  ${props =>
    props.home &&
    css`
      position: absolute;
      right: 0;
      top: 0;
    `}
`

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.book ? "#d4ae7a" : "#fff")};
  color: ${props => (props.book ? "#fff" : "#919da8")};
  font-family: ${Fonts.sofiaBold};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.4px;
`

const Image = styled.img`
  margin-right: 16px;
`

export function CTA({ type }) {
  return (
    <Wrapper home={type}>
      <Section>
        <Image src={mobileicon} />
        +1 813 922 1179
      </Section>
      <Link to="/schedule">
        <Section book>Book Appointment</Section>
      </Link>
    </Wrapper>
  )
}
