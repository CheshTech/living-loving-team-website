import React from "react"
import { useSelector } from "react-redux"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { ListingLink } from "../components/listinglink"
import styled from "styled-components"
import { useState } from "react"
import { getImage } from "gatsby-plugin-image";
import ListingsModal from "../components/listingsmodal"

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 85%;
  margin: 60px auto;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-auto-rows: auto;
  @media (max-width: 920px) {
    grid-auto-rows: auto;
    width: 95%;
    grid-gap: 15px;
  }
`

const Listings = () => {
  const [show, setShow] = useState(false)
  const [url, setUrl] = useState("")
  const selector = useSelector(state => state.app)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "listings_splash.jpg" }) {
        childImageSharp {
          gatsbyImageData( quality: 100, placeholder: TRACED_SVG) 
        }
      }
    }
  `)

  const handleSelect = url => {
    setShow(true)
    setUrl(url)
  }

  const toggleModal = () => {
    setShow(prevState => !prevState)
  }
  const heroImage = getImage(data.placeholderImage)
  return (
    <Layout
      title="Living Loving Team Property Listings"
      img={heroImage}
    >
      <Seo title="Listings" />
      <div id="idxStart"></div>
      <div id="idxStop"></div>
      <Grid>
        {selector &&
          selector.listings &&
          selector.listings.length > 0 &&
          selector.listings.map((key, index) => (
            <ListingLink
              key={index}
              type="blogpg"
              address={key.address.line}
              baths={key.baths}
              beds={key.beds}
              img={key.thumbnail}
              url={key.rdc_web_url}
              price={key.price}
              handleSelect={handleSelect}
            />
          ))}
      </Grid>
      {show && (
        <ListingsModal
          type={"listings"}
          show={show}
          toggleModal={toggleModal}
          url={url}
        />
      )}
    </Layout>
  )
}

export default Listings
