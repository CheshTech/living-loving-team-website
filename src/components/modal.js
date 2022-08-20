import React, { useEffect, Fragment } from "react"
import styled, { css, keyframes } from "styled-components"
import times from "../images/times.svg"
import { Formik } from "formik"
import Mailchimp from "../components/mailchimp"
import { Link } from "gatsby"
import { Title, Text, Row, Button } from "../theme"
import { Responsive } from "../theme/styles"
import axios from "axios"

// MODAL ANIMATION

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

const animation = () =>
  css`
    ${fadeIn} ease-out 50ms;
  `

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10000000000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation};
`

const StyledClose = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

const Wrapper = styled.div`
  width: ${props => props.width || "411px"};
  height: auto;
  background: #000;
  position: relative;
  @media (max-width: 720px) {
    width: 95%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  box-sizing: border-box;
`

const ButtonContainer = styled(Row)`
  ${Responsive.sm`
justify-content: ${props => (props.justifycontent ? "center" : "center")};
align-items: center;
flex-direction: column;
margin-top: 20px;
`}
  ${Responsive.lg`
flex-direction: column;
justify-content: ${props => (props.justifycontent ? "flex-start" : "center")};
align-items: center;
`}
`

const StyledButton = styled(Button)`
  ${Responsive.sm`
margin-right: 0px;
margin-bottom: 10px;
`}
`

export default function Modal({ show, toggleModal, type }) {
  useEffect(() => {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    )
    head.appendChild(script)
  }, [])

  if (!show) {
    return null
  }
  return (
    <Backdrop toggleModal={toggleModal}>
      <Wrapper>
        <StyledClose src={times} onClick={toggleModal}></StyledClose>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          onSubmit={values => {
            let rawData = {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
            }
            rawData = JSON.stringify(rawData)
            axios({
              method: "post",
              url: "https://hooks.zapier.com/hooks/catch/7794827/osx4pnm",
              data: rawData,
            }).then(() => {
              toggleModal()
            })
          }}
        >
          {({
            handleSubmit,
            errors,
            values,
            handleChange,
            handleBlur,
            touched,
          }) => (
            <Fragment>
              {type === "resources" && (
                <Form>
                  <Title
                    white
                    style={{ lineHeight: "1.22" }}
                    textAlign="center"
                  >
                    Are you buying or selling?
                  </Title>
                  <ButtonContainer>
                    <Link to="/free-buyers-guide">
                      <StyledButton>Buyer</StyledButton>
                    </Link>
                    <Link to="free-sellers-guide">
                      <Button>Seller</Button>
                    </Link>
                  </ButtonContainer>
                </Form>
              )}
              {type !== "resources" && (
                <Form onSubmit={handleSubmit}>
                  {type === "landing" && (
                    <Title white style={{ lineHeight: "1.22" }}>
                      Get Your Guide Today!
                    </Title>
                  )}
                  {type !== "landing" && type !== "resources" && (
                    <Title white style={{ lineHeight: "1.22" }}>
                      Subscribe to our Newsletter
                    </Title>
                  )}
                  {type === "landing" && (
                    <Text
                      white
                      style={{ lineHeight: "1.5", marginBottom: "16px" }}
                    >
                      This guide will put you in the position to find the home
                      of your dreams!
                    </Text>
                  )}
                  {type !== "landing" && type !== "resources" && (
                    <Text
                      white
                      style={{ lineHeight: "1.5", marginBottom: "16px" }}
                    >
                      Living Loving Team is the premier Real Estate team based
                      in the Tampa Bay area.
                    </Text>
                  )}
                  <Fragment>
                    <Mailchimp type="landing" />
                  </Fragment>
                </Form>
              )}
            </Fragment>
          )}
        </Formik>
      </Wrapper>
    </Backdrop>
  )
}
// <Input
//   placeholder="First name"
//   value={values.firstName}
//   onChange={handleChange}
//   onBlur={handleBlur}
//   name="firstName"
//   type="firstName"
//   autoCapitalize="none"
//   error={touched.firstName && errors.firstName}
// />
// <Input
//   placeholder="Last name"
//   value={values.lastName}
//   onChange={handleChange}
//   onBlur={handleBlur}
//   name="lastName"
//   type="lastName"
//   autoCapitalize="none"
//   error={touched.lastName && errors.lastName}
// />
// <Input
//   placeholder="Email"
//   value={values.email}
//   onChange={handleChange}
//   onBlur={handleBlur}
//   name="email"
//   type="email"
//   autoCapitalize="none"
//   error={touched.email && errors.email}
// />
// <Button type="submit" style={{ height: "34px" }}>
//   Sign up
// </Button>
