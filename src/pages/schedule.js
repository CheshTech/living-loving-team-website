import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"
import FooterCTA from "../components/footercta"
import { getImage } from "gatsby-plugin-image";
import {
  Column,
  SEOTitle,
  Subtitle,
  Text,
  Row,
  Container,
} from "../theme/index"
import { Colors, Responsive } from "../theme/styles"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const StyledLink = styled.a`
  ${Responsive.sm`
cursor: pointer;
color: ${Colors.green};
margin: ${props => (props.margin ? "0px 15px 0 0" : "0")};
&:hover {
  color: ${Colors.fawn};
}
`}
  ${Responsive.lg`
margin-top: 0px;
`}
`

const Schedule = () => {
  useEffect(() => {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    )
    head.appendChild(script)
  }, [])

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "schedule_splash.jpg" }) {
          childImageSharp {
            gatsbyImageData( quality: 100) 
          }
      }
    }
  `)
  const heroImage = getImage(data.placeholderImage)

  return (
    <Layout
      type="schedule"
      img={heroImage}
      title="Contact Us Today!"
    >
      <SEO title="Schedule an appointment" />
      <Container>
        <Column margin="75px auto" alignitems="center">
          <SEOTitle margin="0 0 5px 0">
            Have any questions? Contact us today!
          </SEOTitle>
          <Subtitle small>
            Fill out the form below, or schedule a video consultation today and
            we'll start your home buying or selling journey!
          </Subtitle>
          <Text margin="5px 0 5px 0" black>
            Email: admin@livinglovingteam.com
          </Text>
          <Text black>Phone: +1 (813) 922 1179</Text>
          <Row
            justifycontent="center"
            alignitems="center"
            margin="15px 0 30px 0"
          >
            <StyledLink
              margin
              href="https://www.facebook.com/TheLivingLovingTeam"
            >
              <FaFacebook size={40} />
            </StyledLink>
            <StyledLink
              margin
              href="https://www.instagram.com/livinglovingteam/"
            >
              <FaInstagram size={40} />
            </StyledLink>
            <StyledLink href="https://www.linkedin.com/company/living-loving-team/">
              <FaLinkedin size={40} />
            </StyledLink>
          </Row>
          <ContactForm />
        </Column>
      </Container>
      <FooterCTA />
    </Layout>
  )
}

export default Schedule
// <div
//   className="fadeIn calendly-inline-widget"
//   data-url="https://calendly.com/livinglovingtampa/15min"
//   style={{
//     minWidth: 320,
//     height: 700,
//     marginBottom: "4em",
//     overflow: "hidden",
//   }}
// ></div>
