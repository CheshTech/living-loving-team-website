import React from "react"
import styled from "styled-components"
import { Title, Text } from "../theme/index"
import { FaAngleRight } from "react-icons/fa"
import { Link } from "gatsby"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 2em;
  @media (max-width: 920px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 0;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`

const Div = styled.div`
  width: 65%;
  margin: 0 auto;
  @media (max-width: 720px) {
    width: 100%;
  }
`

const Row = styled.div`
  display: flex;
  align-content: center;
  height: 25px;
  margin-top: 1.5em;
`

export default function TitleHeader({ title, text, type }) {
  return (
    <Div>
      <Wrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
        {type === "home" && (
          <Link to="/work" style={{ textDecoration: "none" }}>
            <Row>
              <Text purple>View my work</Text>
              <FaAngleRight
                style={{
                  color: "#754d63",
                  height: "28px",
                  width: "16px",
                  marginLeft: ".5em",
                }}
              />
            </Row>
          </Link>
        )}
      </Wrapper>
    </Div>
  )
}
