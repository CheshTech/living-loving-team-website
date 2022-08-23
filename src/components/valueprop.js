import React, { useState } from "react"
import styled from 'styled-components'
import { SEOTitle, Button, Container, Text, Column } from "../theme/index"
import { Responsive } from "../theme/styles"
import Modal from "./modal"
import { Link } from "gatsby"

const StyledColumn = styled(Column)`
  ${Responsive.sm`
    width: 100%;
    margin: 50px auto 75px auto;
    align-items: center;
  `}
  ${Responsive.lg`
  width: 80%;
  `}
`

const StyledText = styled(Text)`
  ${Responsive.sm`
    width: 100%;
    text-align: center;
    width: 90%;
  `}
  ${Responsive.xlg`
  width: 75%;
  `}
`

const ValueProp = () => {
  const [show, setShow] = useState(false)

  const toggleModal = () => {
    setShow(!show)
  }

  return (
    <Container>
      <StyledColumn>
        <SEOTitle textAlign="center">
          Was buying or selling your home an amazing experience?
        </SEOTitle>
        <StyledText margin="0 auto">
          Or has it been a hair pulling process touring too many homes without
          finding the one you want, or your listing isn't getting the attention
          it deserves from eager buyers.
        </StyledText>
        <StyledText margin="10px auto 0 auto">
          We at the Living Loving Team are here for you! Let us guide you
          through the process so it can be a fun and easy transition as you
          prepare for a wonderful life change.
        </StyledText>
        <Link to="/schedule">
          <Button margin="20px 0 0 0">Contact Us</Button>
        </Link>
      </StyledColumn>
      <Modal show={show} type="consultation" toggleModal={toggleModal} />
    </Container>
  )
}
export default ValueProp
