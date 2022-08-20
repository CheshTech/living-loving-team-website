import React from "react"
import styled from "styled-components"
import { Title } from "../theme/index"
import { BgImage } from "gbimage-bridge";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image"


const StyledImg = styled(BgImage)`
  height: 640px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &::after {
    background-position: center;
    background-size: contain;
  }
  @media (max-width: 720px) {
    height: 250px;
    justify-content: center;
  }
`

const Splash = ({ img, title, type }) => {

//   const data = useStaticQuery(graphql`
//   query {
//     contentfulHomeHero {
//       heroImage {
//         gatsbyImageData(placeholder: BLURRED)
//       }
//     }
//   }
// `);

// const backgroundImage = getImage(
//   data.contentfulHomeHero.heroImage.gatsbyImageData
// );

  return (
    <StyledImg image={img}>
      <Title white splash>
        {title}
      </Title>
    </StyledImg>
  )
}

export default Splash
