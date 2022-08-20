import React, { useState } from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Formik } from "formik"
import * as yup from "yup"
import {
  Text,
  Button,
  Column,
  Row,
  Input,
  Textarea,
  Select,
  Label,
} from "../theme/index"
import { Colors, Responsive } from "../theme/styles"

const FormWrapper = styled.div`
  width: ${props => props.width || "640px"};
  height: auto;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border: 2px solid ${Colors.green};
  box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.08);
  padding-top: 40px;
  padding-bottom: 48px;
  background-color: #ffffff;
  @media (max-width: 992px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 780px) {
    width: 95%;
    height: auto;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`

const Form = styled.form`
  width: 85%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 780px) {
    width: 85%;
  }
  @media (max-width: 600px) {
    width: 75%;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, auto);
  }
`

const StyledInput = styled(Input)`
  width: 100%;
  height: 50px;
  border-radius: 2px;
  border: ${props => (props.error ? "solid 1px red" : "solid 1px #c4c9d0")};
  background-color: #ffffff;
  outline: none;
  padding: 0 16px;
  margin-top: 12px;
  transition: 250ms;
  &:focus {
    border: solid 1px ${Colors.darkBlue};
  }
`

const StyledSelect = styled(Select)`
  width: 100%;
  height: 50px;
  border-radius: 2px;
  border: ${props => (props.error ? "solid 1px red" : "solid 1px #c4c9d0")};
  background-color: #ffffff;
  outline: none;
  padding: 0 16px;
  margin-top: 12px;
  transition: 250ms;
  &:focus {
    border: solid 1px ${Colors.darkBlue};
  }
`

const Checkbox = styled.div`
  .checkbox-label {
    display: block;
    position: relative;
    margin: auto;
    cursor: pointer;
    line-height: 24px;
    height: 20px;
    width: 20px;
    clear: both;
  }

  .checkbox-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkbox-label .checkbox-custom {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 2px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    border: 1px solid #c4c9d0;
  }

  .checkbox-label input:checked ~ .checkbox-custom {
    background-color: #ffffff;
    border-radius: 2px;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity: 1;
    border: 1px solid #c4c9d0;
  }

  .checkbox-label .checkbox-custom::after {
    position: absolute;
    content: "";
    left: 12px;
    top: 12px;
    height: 0px;
    width: 0px;
    border-radius: 2px;
    border: 1px solid #c4c9d0;
    -webkit-transform: rotate(0deg) scale(0);
    -ms-transform: rotate(0deg) scale(0);
    transform: rotate(0deg) scale(0);
    opacity: 1;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
  }

  .checkbox-label input:checked ~ .checkbox-custom::after {
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    opacity: 1;
    left: 6px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: 2px solid #2c3e50;
    border-width: 0 2px 2px 0;
    background-color: transparent;
    border-radius: 0;
  }
`

const StyledButton = styled(Button)`
  ${Responsive.sm`
    width: 100%;
  `}
  ${Responsive.md`
  width: 40%;
`}
`

const ContactForm = ({ width }) => {
  const [isChecked, setIsChecked] = useState(true)

  const toggleChange = () => {
    setIsChecked(!isChecked)
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          email: "",
          name: "",
          type: "",
          phoneNumber: "",
          message: "",
        }}
        validationSchema={yup.object().shape({
          email: yup.string().required("Email Required"),
          name: yup.string().required("Name Required"),
          type: yup.string(),
          phoneNumber: yup.string(),
          message: yup.string(),
        })}
        onSubmit={(values, { setErrors, setSubmitting, setStatus }) => {
          fetch("/?no-cache=1", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact",
              ...values,
            }),
          })
            .then(() => {
              if (isChecked === true) {
                addToMailchimp(values.email, {
                  FNAME: values.name,
                  PHONE: values.phoneNumber,
                }).then(data => {
                  if (data.result === "error") {
                    setErrors({ msg: "Error submitting your inquiry" })
                    setSubmitting(false)
                  } else {
                    setStatus({
                      success:
                        "Success! Thanks for your inquiry and signing up for the Living Loving Team Newsletter! Expect an email shortly.",
                    })
                    setSubmitting(false)
                  }
                })
              } else if (isChecked === false) {
                setStatus({
                  success:
                    "Thanks for contacting the Living Loving Team! We'll get back to you as soon as possible.",
                })
                setSubmitting(false)
              } else {
                setErrors({
                  submitErr:
                    "Error. Please make sure required fields are filled out correctly.",
                })
                setSubmitting(false)
              }
            })
            .catch(err => {
              setErrors({ submitErr: "Network error. Please try again" })
            })
        }}
      >
        {({
          handleChange,
          handleSubmit,
          submitForm,
          status,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <FormWrapper width={width}>
            <Form
              id="email-capture"
              onSubmit={handleSubmit}
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div>
                <Grid>
                  <Label>
                    {errors.name && touched.name
                      ? "Please fill out your name"
                      : "Name"}
                    <StyledInput
                      placeholder="Name"
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                      name="name"
                      error={touched.name && errors.name}
                      required
                    />
                  </Label>
                  <Label>
                    Buyer or Seller?
                    <StyledSelect id="type" name="type">
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                    </StyledSelect>
                  </Label>
                  <Label>
                    {errors.email && touched.email
                      ? "Please make sure email is filled out"
                      : "Email"}
                    <StyledInput
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={touched.email && errors.email}
                      required
                    />
                  </Label>
                  <Label>
                    Phone Number
                    <StyledInput
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Label>
                </Grid>
              </div>
              <Label>
                Message
                <Textarea
                  placeholder="Message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                ></Textarea>
              </Label>
              <Row margin="5px">
                <Checkbox>
                  <label className="checkbox-label">
                    <input
                      name="newsletter"
                      onChange={toggleChange}
                      checked={isChecked}
                      type="checkbox"
                    />
                    <span className="checkbox-custom"></span>
                  </label>
                </Checkbox>
                <Text style={{ width: "100%", margin: "0 0 15px 10px" }}>
                  Sign up for the Living Loving Team Newsletter to receive a
                  home buyer guide!
                </Text>
              </Row>
              <div>
                <Text style={{ width: "90%" }}>
                  {
                    (errors =
                      errors.email && touched.email
                        ? errors.submitErr
                        : errors.name
                        ? errors.submitErr
                        : errors.submitErr
                        ? errors.submitErr
                        : errors.msg
                        ? errors.msg
                        : null)
                  }
                  {status && isChecked
                    ? status.success
                    : status
                    ? status.success
                    : null}
                </Text>
              </div>
              <Column width="100%" alignitems="flex-end" margin="10px 0 0 0">
                <StyledButton type="submit" className="cta-btn cta-btn--form">
                  Submit
                </StyledButton>
              </Column>
            </Form>
          </FormWrapper>
        )}
      </Formik>
    </div>
  )
}
export default ContactForm
