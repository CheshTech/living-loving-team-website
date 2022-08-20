import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterCTA from "../components/footercta"
import { Text, Column, Row, Button, Subtitle, SEOTitle } from "../theme/index"
import kisha from "../images/kisha.jpg"
import cristy from "../images/cristy.jpg"
import kaitlin from "../images/kaitlin.jpg"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-direction: ${props => (props.left ? "row" : "row-reverse")};
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`

const Headshot = styled.img`
  width: 100%;
  height: 385px;
  margin-bottom: 16px;
  object-fit: contain;
`

const Grid = styled.div`
  display: grid;
  margin: 60px auto;
  width: 85%;
  grid-gap: 150px;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  margin: 0 auto 132px auto;
  @media (max-width: 780px) {
    grid-auto-rows: auto;
    width: 95%;
    grid-gap: 50px;
  }
`

const StyledColumn = styled(Column)`
  width: ${props => (props.bio ? "65%" : "45%")};
  @media (max-width: 1100px) {
    margin-top: 12px;
  }
  @media (max-width: 980px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`

const StyledRow = styled(Row)`
  justify-content: space-between;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`

const StyledWrapper = styled(Column)`
  width: 65%;
  margin: 72px auto;
  @media (max-width: 920px) {
    width: 85%;
  }
  @media (max-width: 780px) {
    width: 90%;
    align-items: center;
    text-align: center;
  }
`

const StyledText = styled(Text)`
  @media (max-width: 780px) {
    margin-top: 16px;
  }
`

const team = [
  {
    headshot: kisha,
    name: "Kisha",
    bio: `Kisha Linebaugh has lived in and around the Tampa Bay area for over 30 years. She graduated from Robinson
  High School, attended the University of Tampa for 3 years as a scholarship athlete and ultimately graduated with a
  degree in Economics from the University of Florida. Kisha has worked a variety of jobs across many different
  industries including advertising, marketing, education, retail and sales which provides a unique skill set for
  negotiating, analyzing market trends and bridging the gap between people and the complex components of real
  estate. In 2016 Kisha co-founded the Living Loving Team, a local real estate team focused on community minded
  real estate. When she is not helping individuals achieve their financial dreams through real estate or fostering the
  development of healthy communities by supporting local organizations and businesses, she takes delight in
  attending live music concerts, fine dining, relaxing on the beach and traveling to almost anywhere!`,
    profile:
      "https://livinglovingteam.idxbroker.com/idx/agent/190926/kisha-linebaugh",
  },
  {
    headshot: cristy,
    name: "Cristy",
    bio: `Native to the Tampa Bay area Cristy Holt’s extensive knowledge of the region is a much relied upon tool that she
  uses to give sellers a competitive advantage and help buyers make informed decisions. Cristy works closely with a
  wide range of clientele, catering to their unique needs and providing a full perspective on any given property. Her
  curious nature along with her commitment to professional development drives her to stay abreast of market trends.
  This diligently honed skill helps buyers and sellers get the price right! The mother of four children, Cristy has
  firsthand knowledge of the school systems, neighborhoods, parks and activities in and around the Greater Tampa
  Bay area. A former personal trainer and yoga instructor, Cristy’s active lifestyle equips her with a dynamic
  understanding of what each Tampa Bay community has to offer.
  `,
    profile:
      "https://livinglovingteam.idxbroker.com/idx/agent/190925/cristy-holt",
  },

  {
    headshot: kaitlin,
    name: "Kaitlin",
    bio: `Living in the Tampa Bay region for the past 30 plus years equipped Kailtin with personal insight into the Bay Area
  community. A Dunedin Elementary, Middle and High School graduate, Kaitlin is embedded in the Dunedin
  community. Leaving Dunedin for a short stint to attain a bachelor’s degree at the University of Florida, Kaitlin
  returned to serve the Tampa Bay region. Her strong desire to care for the community stems from 12 years’
  experience as a Labor and Delivery nurse. This experience provided Kaitlin with a unique perspective into tending
  for and listening to the needs of people. This directly translates to her care for her customers. Kaitlin exudes
  enthusiasm for meeting new people and living life to the fullest. Her active lifestyle and love of the area's urban and
  outdoor recreational spaces provides a wealth of wisdom for buyers and sellers looking to actualize their real estate
  goals.`,
    profile:
      "https://livinglovingteam.idxbroker.com/idx/agent/190927/kaitlin-brennan",
  },
]

const Bio = ({ headshot, name, bio, profile, index }) => {
  const left = index % 2
  return (
    <Wrapper left={left}>
      <Column>
        <Headshot src={headshot} />
      </Column>
      <StyledColumn bio>
        <Subtitle small>{name}</Subtitle>
        <Text>{bio}</Text>
        <a href={profile}>
          <Button margin="15px 0 0 0">{`View ${name}'s Listings`}</Button>
        </a>
      </StyledColumn>
    </Wrapper>
  )
}

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about_splash.jpg" }) {
        childImageSharp {
          gatsbyImageData( quality: 100) 
        }
      }
    }
  `)
  const heroImage = getImage(data.placeholderImage)

  return (
    <Layout
      type="about"
      img={heroImage}
      title="Meet the team"
    >
      <SEO
        title="About the Living Loving Team"
        description="Learn about Tampa Bay real estate's finest team! The Living Loving Team is here to find your dream home"
      />
      <StyledWrapper>
        <SEOTitle>About the team</SEOTitle>
        <StyledRow>
          <StyledColumn>
            <Text>
              The Living Loving Team prides itself on its commitment to
              excellence, creative problem-solving, & unwavering effort. With a
              focus on community-minded real estate, the team helps guide you to
              make the best decisions, based on your budget, needs, and
              expectations. They use their expert market analysis to provide the
              following: a personalized listing strategy session, a
              neighborhood-specific marketing plan, a tailored home
              preparation punch list, resources to maximize the sale of your
              home.
            </Text>
          </StyledColumn>
          <StyledColumn>
            <StyledText>
              Your experience with the Living Loving Team will be professional
              and focused. The Team brings a strong market knowledge based on
              over 25 years of living and working in the Tampa Bay area. They
              are friendly, approachable, and fun! They strive to take the
              complexity of real estate and make it simple and understandable
              while bringing a level of personal care that is rarely found in
              any industry. 
            </StyledText>
          </StyledColumn>
        </StyledRow>
      </StyledWrapper>
      <Grid>
        {team.map((key, index) => {
          return (
            <Bio
              headshot={key.headshot}
              name={key.name}
              key={key.name}
              bio={key.bio}
              index={index}
              profile={key.profile}
            />
          )
        })}
      </Grid>
      <FooterCTA />
    </Layout>
  )
}

export default About
