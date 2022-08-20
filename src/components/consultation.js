import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { Text, Button, Column, Row, SEOTitle } from "../theme/index"
import { Colors } from "../theme/styles"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 96px 0;
  display: flex;
  align-items: center;
  background: #fff;
`

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 100%;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
  padding: 80px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  transition: 250ms;
  @media (max-width: 980px) {
    width: 90%;
    align-items: center;
    padding: 80px 0;
    text-align: center;
  }
`

const Line = styled.div`
  width: 31px;
  height: 3px;
  background: ${Colors.fawn};
  margin-bottom: 10px;
`

const StyledColumn = styled(Column)`
  width: 300px;
  @media (max-width: 980px) {
    display: none;
  }
`

const BoxStyledColumn = styled(Column)`
  @media (max-width: 980px) {
    align-items: center;
  }
`

const InfoWrapper = styled(Row)`
  margin: 0 0 30px 0;
  width: 100%;
  @media (max-width: 980px) {
    flex-direction: column;
    width: 75%;
  }
`

const ButtonWrapper = styled(Row)`
  width: 59%;
  margin: 0 auto;
  align-self: flex-start;
  @media (max-width: 980px) {
    width: 100%;
    align-self: center;
    justify-content: center;
  }
`

const StyledTextRow = styled(Row)`
  width: 75%;
  margin-left: 50px;
  @media (max-width: 980px) {
    width: 100%;
    margin-left: 0;
  }
`

const info = [
  {
    title: "Step 1",
    text:
      " Fill out our contact form and tell us a little about what you want to achieve.",
  },
  {
    title: "Step 2",
    text:
      "A member of our team will personally reach out to you to book your first consultation.",
  },
  {
    title: "Step 3",
    text:
      "Come in to our office or speak with us on Zoom to receive your first consultation and discuss with one of our team members what you or your family are looking for.",
  },
]

const Box = () => {
  return (
    <BoxWrapper>
      {info.map((key, index) => {
        return (
          <InfoWrapper key={index}>
            <Text blogsubtitle>{key.title}</Text>
            <StyledTextRow>
              <Text>{key.text}</Text>
            </StyledTextRow>
          </InfoWrapper>
        )
      })}
      <ButtonWrapper>
        <Button onClick={() => navigate("/schedule")}>
          Book an appointment
        </Button>
      </ButtonWrapper>
    </BoxWrapper>
  )
}

const Consultation = () => {
  return (
    <Wrapper>
      <Row
        width="85%"
        margin="0 auto"
        alignitems="center"
        justifycontent="space-evenly"
      >
        <BoxStyledColumn>
          <SEOTitle margin="0 0 40px 0">Three easy steps</SEOTitle>
          <Box />
        </BoxStyledColumn>
        <StyledColumn>
          <Line />
          <SEOTitle margin="0 0 26px 0" style={{ lineHeight: "1.22" }}>
            Your first consultation
          </SEOTitle>
          <Text>
            The first step to finding that dream home or selling is to contact
            our team to discuss the best approach that meets your goals.
          </Text>
        </StyledColumn>
      </Row>
    </Wrapper>
  )
}

export default Consultation
