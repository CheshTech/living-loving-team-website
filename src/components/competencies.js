import React from "react"
import styled from "styled-components"
import { Subtitle, Text } from "../theme/index"

const Wrapper = styled.div`
  margin: 4em auto;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 920px) {
    max-width: 75%;
  }
  @media (max-width: 720px) {
    max-width: 100%;
  }
`

const Competencies = ({ title, text }) => (
  <Wrapper>
    <Subtitle>{title}</Subtitle>
    <Text>{text}</Text>
  </Wrapper>
)

export default Competencies
