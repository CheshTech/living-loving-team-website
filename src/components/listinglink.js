import React from "react"
import styled from "styled-components"
import { Text, Row, Column } from "../theme/index"

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: ${props => props.background};
  border: 1.5px solid transparent;
  transition: 250ms;
  border-radius: 8px;
  cursor: pointer;
  @media (min-width: 920px) {
    &:hover {
      transform: translateY(-10px);
    }
  }
`

const BlogImage = styled.img`
  width: 260px;
  height: 180px;
  object-fit: contain;
  background-size: cover;
  background-position: center;
`

const StyledColumn = styled(Column)`
  align-items: flex-start;
  width: 260px;
`

export const ListingLink = ({
  address,
  beds,
  baths,
  img,
  url,
  price,
  handleSelect,
}) => {
  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }
  return (
    <BlogWrapper background={"#fff"} onClick={() => handleSelect(url)}>
      <BlogImage src={img} />
      <StyledColumn>
        <Text blogsubtitle>{address}</Text>
        <Row justifycontent="space-between">
          <Text blogtitle small style={{ marginRight: 8 }}>
            {`${beds} bd / ${baths} ba`}
          </Text>
          <Text blogtitle small>
            {`$${formatNumber(price)}`}
          </Text>
        </Row>
      </StyledColumn>
    </BlogWrapper>
    // </a>
  )
}
