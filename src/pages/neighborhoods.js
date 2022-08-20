import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { handleNeighborhood } from "../constants/neighborhoods"
import NeighborhoodsWidget from "../components/neighborhoods_widget"
import { Row, Text, Button, Subtitle, Column } from "../theme"
import { useStaticQuery, graphql } from "gatsby"
import FooterCTA from "../components/footercta"
import { getImage } from "gatsby-plugin-image";

const Image = styled.img`
  width: 600px;
  @media (max-width: 1400px) {
    width: 475px;
  }
  @media (max-width: 1200px) {
    width: 375px;
  }
  @media (max-width: 980px) {
    width: 100%;
    margin-bottom: 24px;
  }
`

const StyledRow = styled(Row)`
  width: 100%;
  background: #f8f8f8;
  padding-bottom: 120px;
`

const Div = styled(Row)`
  width: 85%;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 980px) {
    flex-direction: column;
    width: 85%;
  }
`

const StyledColumn = styled(Column)`
  width: 45%;
  @media (max-width: 980px) {
    width: 100%;
  }
`

const Neighborhoods = () => {
  const [selectedHood, setSelectedHood] = useState("")
  useEffect(() => {
    setSelectedHood("downtownTampa")
  }, [])

  const handleSelect = value => {
    setSelectedHood(value)
    const element = document.getElementById("neighborhoodInfo")
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    })
  }

  const neighborhoodData = handleNeighborhood(selectedHood)
  const { title, text, link, image } = neighborhoodData

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "neighborhoods_splash.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100) 
        }
      }
    }
  `)

const heroImage = getImage(data.placeholderImage)
  return (
    <Layout
      type="neighborhoods"
      // img={getImage(data.placeholderImage.gatsbyImageData)}
      img={heroImage}
      title="Neighborhoods"
    >
      <SEO
        title="Best Neighborhoods in Tampa"
        description="Discover the best neighborhoods in Tampa Bay to live with The Living Loving Team. Your dream home awaits!"
      />
      <NeighborhoodsWidget
        selectedHood={selectedHood}
        handleSelect={handleSelect}
        type="neighborhoods"
      />
      <StyledRow id="neighborhoodInfo">
        <Div>
          <Image src={image} />
          <StyledColumn>
            <Subtitle small>{title}</Subtitle>
            <Text>{text}</Text>
            <a href={link}>
              <Button margin="15px 0 0 0">View Listings</Button>
            </a>
          </StyledColumn>
        </Div>
      </StyledRow>
      <FooterCTA />
    </Layout>
  )
}

export default Neighborhoods
