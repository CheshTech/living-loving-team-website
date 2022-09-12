import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FooterCTA from "../components/footercta"
import { Text, Column, Row, Subtitle, SEOTitle } from "../theme/index"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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



const Bio = ({ headshot, name, bio, profile, index, data }) => {

  const left = index % 2
  return (
    <Wrapper left={left}>
      <Column>
        <GatsbyImage image={headshot} alt="Living Loving Team Members" style={{ borderRadius: "2px"}} />
      </Column>
      <StyledColumn bio>
        <Subtitle small>{name}</Subtitle>
        <Text>{bio}</Text>
        {/* <a href={profile}>
          <Button margin="15px 0 0 0">{`View ${name}'s Listings`}</Button>
        </a> */}
      </StyledColumn>
    </Wrapper>
  )
}

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about_splash.jpg" }) {
        childImageSharp {
          gatsbyImageData( quality: 100, placeholder: TRACED_SVG) 
        }
      }
      kisha: file(relativePath: { eq: "kisha.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            width: 300
          )
        }
      }
      cristy: file(relativePath: { eq: "cristy.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            width: 300
          )
        }
      }
      kaitlin: file(relativePath: { eq: "kaitlin.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            width: 300
          )
        }
      }
      stefan: file(relativePath: { eq: "stefan.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            width: 300
          )
        }
      }
      nicola: file(relativePath: { eq: "nicola.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            width: 300
          )
        }
      }
      anthony: file(relativePath: { eq: "anthony.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            width: 300
          )
        }
      }
    }
  `)

  const team = [
    {
      headshot: data.kisha.childImageSharp.gatsbyImageData,
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
      headshot: data.cristy.childImageSharp.gatsbyImageData,
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
      headshot: data.kaitlin.childImageSharp.gatsbyImageData,
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
    {
      headshot: data.stefan.childImageSharp.gatsbyImageData,
      name: "Stefan",
      bio: `As the official international agent of the Living Loving Team, Stefan brings a global view to our
      local market. Stefan is an active member of the Global Business Counsel connecting his German
      roots with his 30 years as a Tampa resident. Along with his ability to see our market from a
      global perspective, Stefan brings 20-plus years of marketing and event space knowledge and
      experience to each of his listings with precision and expertise. Moreover, his years working in
      experiential marketing perfectly prepared him to offer both buyers and sellers a stress-free Real
      Estate experience. When Stefan isn’t making homeownership dreams come true for his clients, he enjoys spending
      as much time as possible in Florida’s great outdoors. An avid hunter and hiker, you can find
      Stefan often in Florida’s forests or shooting his bow at the local archery range. Likewise, you
      may find Stefan with his wife Kaitlin and daughter, Kili, in their hometown of Dunedin running
      on the trails or fishing at the beach.`,
      profile:
        "https://livinglovingteam.idxbroker.com/idx/agent/190927/kaitlin-brennan",
    },
    {
      headshot: data.anthony.childImageSharp.gatsbyImageData,
      name: "Anthony",
      bio: `Anthony Cortese has lived in the Tampa Bay area for over 3 years coming from the cold northwest. He couldn’t imagine living anywhere that does not have sunshine and beaches! He graduated from The University of South Florida, attaining a bachelor's degree in Marketing. Anthony has worked a variety of jobs in the marketing field ranging from the Minnesota Vikings to the University of South Florida Athletic Department. This experience gives Anthony a unique skill set in negotiation and marketing tactics to make certain both buyers and sellers get the price they desire. In 2021 Anthony Joined The Living Loving Team, a local real estate team focused on community minded real estate. When he is not helping families make real estate moves or investing in his own real estate, he is playing hockey, relaxing on the beach, and cheering on his favorite football and hockey teams! `,
      profile:
        "https://livinglovingteam.idxbroker.com/idx/agent/190927/kaitlin-brennan",
    },
    {
      headshot: data.nicola.childImageSharp.gatsbyImageData,
      name: "Nicola",
      bio: `Nicola has lived in St. Petersburg for the past eighteen years after making the big move across the bridge after up in Tampa. She loves all that the St. Pete/Tampa area has to offer!  She obtained her Master’s degree in Education Leadership from the University of South Florida and has recently left her twenty three year teaching career to join the Living Loving Team as our Director of Operations.  She keeps the team organized and keep the deals on track!  Outside of the work day, she loves spending time with her family, trying new restaurants, and enjoying concerts. `,
      profile:
        "https://livinglovingteam.idxbroker.com/idx/agent/190927/kaitlin-brennan",
    },
  ]



  const heroImage = getImage(data.placeholderImage)
console.log(team, "ANAKIN")
  return (
    <Layout
      type="about"
      img={heroImage}
      title="Meet the team"
      loading="eager"
    >
      <Seo
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
              data={data}
            />
          )
        })}
      </Grid>
      <FooterCTA />
    </Layout>
  )
}

export default About
