import React from "react"
import styled from "styled-components"
import { Button, Subtitle, SEOTitle } from "../theme/index"
import { navigate } from "gatsby"
import { hoods } from "../constants/neighborhoods"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px 0 75px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #f8f8f8;
  @media (max-width: 980px) {
    padding: 2em;
    margin: 0;
  }
`

const Grid = styled.div`
  display: grid;
  margin: 60px auto;
  width: 85%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 200px;
  @media (max-width: 980px) {
    width: 95%;
  }
`

const NeighborhoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 45px;
  box-sizing: border-box;
  border: solid 0.25px #d2d2d2;
  cursor: ${props => props.type};
  position: relative;
  background: ${props => (props.active ? "#d4ae7a" : "#000")};
  transition: 250ms;
  &:hover {
    background: ${props => props.hover};
  }
`

const Icon = styled.img`
  height: 35px;
  margin-bottom: 28px;
`

const Neighborhood = ({
  title,
  icon,
  selectedHood,
  link,
  handleSelect,
  value,
  type,
}) => {
  return (
    <NeighborhoodWrapper
      hover={type === "neighborhoods" && "#d4ae7a"}
      type={type === "neighborhoods" && "pointer"}
      active={type === "neighborhoods" && value === selectedHood}
      onClick={
        type === "neighborhoods" ? () => handleSelect(value) : () => null
      }
    >
      <Icon src={icon} />
      <div style={{ width: 200 }}>
        <Subtitle white small>
          {title}
        </Subtitle>
      </div>
    </NeighborhoodWrapper>
  )
}

const Neighborhoods = ({ type, handleSelect, selectedHood }) => {
  const handleArrays = () => {
    let arr
    const newArr = [...hoods]
    if (type === "neighborhoods") {
      arr = newArr
    } else {
      newArr.length = 4
      arr = newArr
    }
    return arr
  }

  const newHoodsArr = handleArrays()

  return (
    <Wrapper>
      {type !== "neighborhoods" && (
        <SEOTitle margin="0 0 6px 0">Explore our Neighborhoods</SEOTitle>
      )}

      <Grid>
        {newHoodsArr.map((key, index) => {
          return (
            <Neighborhood
              title={key.title}
              text={key.text}
              icon={key.icon}
              value={key.value}
              link={key.link}
              selectedHood={selectedHood}
              handleSelect={handleSelect}
              key={index}
              type={type}
            />
          )
        })}
      </Grid>
      {type !== "neighborhoods" && (
        <Button onClick={() => navigate("/neighborhoods")}>
          Neighborhoods
        </Button>
      )}
    </Wrapper>
  )
}

export default Neighborhoods
