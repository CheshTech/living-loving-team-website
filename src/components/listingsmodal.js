import React from "react"
import styled, { css, keyframes } from "styled-components"
import times from "../images/times.svg"
import { Formik } from "formik"
import { Input, Title, Text, Button } from "../theme"
import axios from "axios"
import * as yup from "yup"

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
  width: 411px;
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

export default function ListingsModal({ show, toggleModal, url }) {
  if (!show) {
    return null
  }
  return (
    <Backdrop toggleModal={toggleModal}>
      <Wrapper>
        <StyledClose src={times} onClick={toggleModal}></StyledClose>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validationSchema={yup.object().shape({
            firstName: yup.string().required("First name is required"),
            lastName: yup.string().required("Last name is required"),
            email: yup
              .string()
              .email()
              .required("Email is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true)
            let rawData = {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              notes: url,
            }
            rawData = JSON.stringify(rawData)
            axios({
              method: "post",
              url: "https://hooks.zapier.com/hooks/catch/7794827/osx4pnm",
              data: rawData,
            })
            setSubmitting(false)
          }}
        >
          {({
            handleSubmit,
            errors,
            values,
            handleChange,
            handleBlur,
            touched,
            submitCount,
            isValid,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Title white style={{ lineHeight: "1.22" }}>
                Contact us about this property
              </Title>
              <Text white style={{ lineHeight: "1.5", marginBottom: "16px" }}>
                Let us help you find your new dream home. Fill out the below
                details to contact us about this property.
              </Text>
              <Input
                required
                placeholder="First name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                name="firstName"
                type="firstName"
                autoCapitalize="none"
                error={touched.firstName && errors.firstName}
              />
              <Input
                required
                placeholder="Last name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                name="lastName"
                type="lastName"
                autoCapitalize="none"
                error={touched.lastName && errors.lastName}
              />
              <Input
                required
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                type="email"
                autoCapitalize="none"
                error={touched.email && errors.email}
              />
              {isValid && submitCount >= 1 && (
                <a target="_blank" href={url} rel="noopener noreferrer">
                  <Button type="button" style={{ height: "34px", width: 250 }}>
                    Continue to Realtor.com
                  </Button>
                </a>
              )}
              {!isValid ||
                (submitCount === 0 && (
                  <Button type="submit" style={{ height: "34px" }}>
                    Contact
                  </Button>
                ))}
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Backdrop>
  )
}
