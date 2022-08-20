import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Headshot = () => {
  return (
    <StaticImage
      style={{ borderRadius: 8 }}
      src="../images/will.jpg"
    />
  )
}

export default Headshot
