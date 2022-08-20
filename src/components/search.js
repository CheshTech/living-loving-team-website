import React from "react"
import styled from "styled-components"
import { SEOTitle, Button, Column } from "../theme/index"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 75px auto;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  @media (max-width: 1200px) {
    padding: 2em;
    margin: 0;
    flex-direction: column;
  }
`

const Search = () => {
  return (
    <Wrapper>
      <Column alignitems="center">
        <SEOTitle margin="0" textAlign="center">
          Find Your Dream Home
        </SEOTitle>
        <a href="https://livinglovingteam.idxbroker.com/idx/search/basic">
          <Button margin="10px 0 0 0">Search Now</Button>
        </a>
      </Column>
    </Wrapper>
  )
}

export default Search
