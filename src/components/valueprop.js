import React, { useState } from "react"
import styled from 'styled-components'
import { SEOTitle, Button, Container, Column } from "../theme/index"
import { Responsive } from "../theme/styles"
import Modal from "./modal"
import HomeTestimonial from "./hometestimonial"
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
        <HomeTestimonial />
        <Link to="/schedule">
          <Button margin="20px 0 0 0">Contact Us</Button>
        </Link>
      </StyledColumn>
      <Modal show={show} type="consultation" toggleModal={toggleModal} />
    </Container>
  )
}
export default ValueProp
