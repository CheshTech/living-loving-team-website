import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogGrid from "../components/bloggrid"
import LeadMagnet from "../components/leadmagnet"
import Philosophy from "../components/philosophy"
import NeighborhoodsWidget from "../components/neighborhoods_widget"
import Consultation from "../components/consultation"
import Search from "../components/search"
import Ratings from "../components/ratings"
import ValueProp from "../components/valueprop"
import { useEffect } from "react"
import Modal from "../components/modal.js"
import FooterCTA from "../components/footercta"
import HomeTestimonial from "../components/hometestimonial"

const Index = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const modalState = localStorage.getItem("subscribe")
    if (!modalState) {
      setTimeout(() => {
        localStorage.setItem("subscribe", true)
        setShow(true)
      }, 12500)
    }
  }, [])

  const toggleModal = () => {
    setShow(prevState => !prevState)
  }

  return (
    <Layout type="home">
      <Seo title="Living Loving Team: Tampa's Finest Real Estate Team" />
      <ValueProp />
      <Philosophy />
      <Search />
      <NeighborhoodsWidget />
      <LeadMagnet />
      <BlogGrid />
      <Ratings />
      <HomeTestimonial />
      <Consultation />
      {show && <Modal show={show} toggleModal={toggleModal} />}
      <FooterCTA />
    </Layout>
  )
}

export default Index
