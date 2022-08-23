import React from "react"
import styled from "styled-components"
import { SEOTitle, Text, Column, Row, Button } from "../theme/index"
import { navigate } from "gatsby"
import { Colors, Fonts } from "../theme/styles"
import philosophypic from "../images/philosophy.jpg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding-top: 96px;
  padding-bottom: 250px;
  position: relative;
  @media (max-width: 1300px) {
    padding-bottom: 100px;
  }
  @media (max-width: 1200px) {
    padding-bottom: 50px;
  }
`

const Div = styled.div`
  width: 85%;
  margin: 0 auto;
  @media (max-width: 720px) {
    width: 90%;
  }
`

const PhilosophyBox = styled.div`
  width: 515px;
  height: 706px;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #000;
  padding: 96px 0 50px 50px;
  box-sizing: border-box;
  z-index: 100;
  @media (min-width: 1600px) {
    width: 575px;
  }
  @media (max-width: 1400px) {
    width: 475px;
  }
  @media (max-width: 1250px) {
    width: 400px;
    padding-top: 50px;
    height: auto;
  }
  @media (max-width: 1050px) {
    width: 85%;
    margin: 0 auto;
    margin-top: -125px;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin-top: 0;
    padding: 25px;
  }
`

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${Colors.fawn};
  margin-bottom: 30px;
`

const InformationBox = styled(Column)`
  width: 275px;
  @media (max-width: 1200px) {
    width: 50%;
  }
`

const InfoTitle = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: 2px;
  color: #636363;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: ${Fonts.sofiaBold};
`

const DesktopImage = styled.img`
  width: 1125px;
  position: absolute;
  bottom: 0;
  left: 100px;
  @media (min-width: 1600px) {
    width: 1250px;
  }
  @media (max-width: 1400px) {
    width: 1050px;
  }
  @media (max-width: 1300px) {
    width: 950px;
  }
  @media (max-width: 1200px) {
    width: 850px;
  }
  @media (max-width: 1050px) {
    display: none;
  }
`

const MobileImage = styled.img`
  width: 100%;
  display: none;
  @media (max-width: 1050px) {
    display: block;
    margin: 50px auto;
  }
`

const StyledRow = styled(Row)`
  justify-content: space-between;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`

const StyledContactColumn = styled(Column)`
  width: 550px;
  margin-left: 75px;
  @media (max-width: 1400px) {
    margin-left: 15px;
  }
  @media (max-width: 1200px) {
    width: 450px;
  }
  @media (max-width: 1050px) {
    width: 75%;
  }
  @media (max-width: 720px) {
    margin-left: 0;
    margin: 0 auto;
    width: 95%;
  }
`

const StyledContactRow = styled(Row)`
  @media (max-width: 980px) {
    justify-content: space-evenly;
  }
`

const StyledTextColumn = styled(Column)`
  width: 90%;
  @media (max-width: 480px) {
    width: 100%;
  }
`

function Information({ title, lines }) {
  return (
    <InformationBox>
      <InfoTitle>{title}</InfoTitle>
      {lines.map((key, index) => {
        return (
          <Text small key={index}>
            {key}
          </Text>
        )
      })}
    </InformationBox>
  )
}

const information = [
  {
    title: "Address",
    lines: [
      "Compass",
      "3615 Bromley Grand Ave Suite 230",
      "Tampa, Florida 33607",
      "Office number: 813-355-0744"
    ],
  },
  {
    title: "Contact",
    lines: ["+1 813 922 1179", "admin@livinglovingteam.com"],
  },
]

export default function Philosophy() {
  return (
    <Wrapper>
      <Div>
        <StyledRow>
          <StyledContactColumn>
            <Line />
            <StyledContactRow>
              {information.map((key, index) => {
                return (
                  <Information
                    title={key.title}
                    lines={key.lines}
                    key={index}
                  />
                )
              })}
            </StyledContactRow>
          </StyledContactColumn>
          <MobileImage src={philosophypic} />
          <PhilosophyBox>
            <SEOTitle white margin="0">
              Philosophy
            </SEOTitle>
            <StyledTextColumn>
              <Text white small>
                The Living Loving Team strives to ensure the positive growth of
                Tampa Bay and its surrounding communities, our philosophy is
                simple: clients come first. We pledge to be in constant
                communication with our clients, keeping them fully informed
                throughout the entire buying or selling process. Leading with
                patience and understanding we tailor our services to your unique
                situation.
              </Text>
              <Button
                onClick={() => navigate("/about")}
                style={{ marginTop: "45px" }}
              >
                Read more
              </Button>
            </StyledTextColumn>
          </PhilosophyBox>
        </StyledRow>
      </Div>
      <DesktopImage src={philosophypic} />
    </Wrapper>
  )
}
