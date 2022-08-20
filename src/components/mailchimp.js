import React, { Fragment } from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
import * as yup from "yup"
import { Formik } from "formik"
import { Button, Text, Column, Input } from "../theme/index"
import { Colors, Responsive } from "../theme/styles"
import { navigate } from "gatsby"

const StyledColumn = styled(Column)`
  ${Responsive.sm`
        margin-top: 30px;
        align-items: center;
        width: 100%;
    `}
  ${Responsive.lg`
    margin-top: 0px;
    align-items: center;
    width: 100%;
`}
`

const Form = styled.form`
  background: transparent;
  width: 100%;
  // border: 2px solid ${Colors.lightBlue};
  margin-bottom: 0px;
`

const StyledInput = styled(Input)`
  width: ${props => props.width || "80%"};
  margin-top: 5px;
  margin-bottom: ${props => (props.marginbottom ? "0px" : "8px")};
`

const StyledButton = styled(Button)`
  background: ${Colors.fawn};
  color: $ ${Colors.white};
  &:hover {
    color: #fff;
  }
`

const Mailchimp = ({ type }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        email: "",
        firstName: "",
      }}
      validationSchema={yup.object().shape({
        email: yup.string("Please enter a valid email"),
        firstName: yup.string("Please enter your name"),
      })}
      onSubmit={(values, { setErrors, setStatus }) => {
        if (!values.email && !values.firstName) {
          setErrors({
            submitErr: true,
          })
        } else {
          setStatus({
            success: true,
          })
          addToMailchimp(values.email, {
            FNAME: values.firstName,
          })
            .then(result => {
              if (result.result !== `success`) {
                setErrors({
                  submitErr: "Please enter a valid email and your name",
                })
              } else {
                setStatus({
                  success: navigate("/success"),
                })
              }
            })
            .catch(err => {
              setErrors({
                submitErr: "Something went wrong",
              })
            })
        }
      }}
    >
      {({
        handleChange,
        handleSubmit,
        status,
        handleBlur,
        values,
        errors,
        touched,
      }) => {
        return (
          <Fragment>
            {type === "landing" && (
              <StyledColumn>
                <Text width="80%" margin="0 auto">
                  {errors.email && touched.email
                    ? errors.email
                    : errors.submitErr
                    ? errors.submitErr
                    : status && status.success
                    ? status.success
                    : null}
                </Text>
                <Form id="email-capture" onSubmit={handleSubmit}>
                  <Column alignitems="center" margin="0 auto">
                    <StyledInput
                      placeholder="Name"
                      width="100%"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="firstName"
                      type="firstName"
                      autoCapitalize="none"
                      error={touched.firstName && errors.firstName}
                      required
                    />
                    <StyledInput
                      marginbottom
                      width="100%"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      type="email"
                      autoCapitalize="none"
                      error={touched.email && errors.email}
                      required
                    />
                    {type !== "landing" && (
                      <StyledButton
                        width="80%"
                        type="submit"
                        margin="10px 0 0 0"
                        footer
                      >
                        Sign up
                      </StyledButton>
                    )}
                    {type === "landing" && (
                      <StyledButton
                        width="100%"
                        type="submit"
                        margin="10px 0 0 0"
                      >
                        Get Your Guide
                      </StyledButton>
                    )}
                  </Column>
                </Form>
              </StyledColumn>
            )}
            {type !== "landing" && (
              <StyledColumn>
                <Text width="80%" margin="0 auto">
                  {errors.email && touched.email
                    ? errors.email
                    : errors.submitErr
                    ? errors.submitErr
                    : status && status.success
                    ? status.success
                    : null}
                </Text>
                <Form id="email-capture" onSubmit={handleSubmit}>
                  <Column alignitems="center" margin="0 auto">
                    <StyledInput
                      placeholder="Name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="firstName"
                      type="firstName"
                      autoCapitalize="none"
                      error={touched.firstName && errors.firstName}
                      required
                    />
                    <StyledInput
                      marginbottom
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      type="email"
                      autoCapitalize="none"
                      error={touched.email && errors.email}
                      required
                    />
                    <StyledButton
                      width="80%"
                      type="submit"
                      margin="10px 0 0 0"
                      footer
                    >
                      Sign Up
                    </StyledButton>
                  </Column>
                </Form>
              </StyledColumn>
            )}
          </Fragment>
        )
      }}
    </Formik>
  )
}

export default Mailchimp
