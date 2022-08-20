import React, { useState } from "react"
import { SEOTitle, Button, Container, Text, Column } from "../theme/index"
import Modal from "./modal"
import { Link } from "gatsby"

const ValueProp = () => {
  const [show, setShow] = useState(false)

  const toggleModal = () => {
    setShow(!show)
  }

  return (
    <Container>
      <Column width="80%" margin="50px auto 75px auto" alignitems="center">
        <SEOTitle textAlign="center">
          Was buying or selling your home an amazing experience?
        </SEOTitle>
        <Text textAlign="center" width="75%" margin="0 auto">
          Or has it been a hair pulling process touring too many homes without
          finding the one you want, or your listing isn't getting the attention
          it deserves from eager buyers.
        </Text>
        <Text textAlign="center" width="75%" margin="10px auto 0 auto">
          We at the Living Loving Team are here for you! Let us guide you
          through the process so it can be a fun and easy transition as you
          prepare for a wonderful life change.
        </Text>
        <Link to="/schedule">
          <Button margin="20px 0 0 0">Contact Us</Button>
        </Link>
      </Column>
      <Modal show={show} type="consultation" toggleModal={toggleModal} />
    </Container>
  )
}
export default ValueProp
