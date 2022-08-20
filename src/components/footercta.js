import React, { Fragment } from "react"
import styled from "styled-components"
import { Button, Column, SEOTitle } from "../theme/index"
import Mailchimp from "./mailchimp"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  //   background-color: #d3e9d6;
  background-color: #d4ae7a;
  padding: 25px 0;
  @media (max-width: 1200px) {
    padding: 2em;
    margin: 0;
    flex-direction: column;
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  padding: 10px;
  color: #000;
  border-radius: 3px;
  margin-top: 10px;
  &:hover {
    background: #000;
    color: #fff;
  }
  @media (max-width: 780px) {
    width: 225px;
    height: 52px;
  }
`

const FooterCTA = ({ type }) => {
  return (
    <Wrapper>
      <Column alignitems="center">
        {type === "blog" && (
          <Fragment>
            <SEOTitle textAlign="center" white margin="0">
              Sign up for our newsletter!
            </SEOTitle>
            <Mailchimp type="footer" />
          </Fragment>
        )}
        {type !== "blog" && (
          <Fragment>
            <SEOTitle textAlign="center" white margin="0">
              Looking for your new dream home?
            </SEOTitle>
            <a href="https://livinglovingteam.idxbroker.com/idx/featured">
              <StyledButton hover="#000" background="#d3e9d6">
                View Featured Listings
              </StyledButton>
            </a>
          </Fragment>
        )}
      </Column>
    </Wrapper>
  )
}

export default FooterCTA
