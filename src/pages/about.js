import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import ImageStarFarms from "../components/imagestarfarms"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
    <SEO title="Market Box" />
    <Row className="justify-content-center">
      <Col className="" sm={12} md={7}>
        <ImageStarFarms />
        <p className="my-2 mx-4 p-2">
          Market Box was born as an emergency pandemic response in April 2020, to fight many of our neighbors’ growing food insecurity. We built this mutual aid initiative on a long tradition of collaboration between organizations in our building, the <a href="https://experimentalstation.org/">Experimental Station</a>, located in the Woodlawn neighborhood of Chicago. The Experimental Station is home to a bike shop, farmers market, journalism organizations, and a café/bookstore. Our history of cross-organization, intergenerational collaboration between colleagues and friends allowed for quick mobilization when the pandemic closed farmers markets and made grocery stores less accessible. Food stamps could not be used online, and so we began Market Box with the 61st Street Farmers Market, to make sure our regulars who used the Market’s LINK matching program could still access produce, eggs, bread, and meat.
        </p>
        <p className="my-2 mx-4 p-2">
          We originally built Market Box on a CSA from Star Farm Chicago, a non-profit farm on the city’s Southwest Side. As we expanded, we partnered with Local Foods Chicago, a grocery store that sources from farms within a day’s freight range of the city. Through these partnerships, we’ve sourced from over 35 small to medium-sized farms, in some cases helping to ensure small farm’s survival through the pandemic. This ecosystem, neighbors funding farmers to feed neighbors, was intentional. Throughout the pandemic, we saw grocery chains and Amazon mark record profits while our communities suffered untold loss: we wanted to support systems that would love us back.
        </p>
        <p className="my-2 mx-4 p-2">
          We tapped existing networks and partnered with other mutual aid projects to grow Market Box, working with the People’s Grab-N-Go food site in Washington Park to sign up visitors, who often referred their neighbors, grandmothers, and sisters who might not easily be able to travel to a food site. By summer 2020, our list of recipients on the South Side of Chicago had expanded to 400 households, self-identified as Black and low-income. Over the past year, we delivered over 6000 bags of groceries by raising over $200,000 from mostly small donors. These small donations went two ways, to feed neighbors fresh food that would complement the non-perishables more often found at food banks and food sites, and to support small farmers in the midwest, funding staff infrastructure investments in a perilous summer.
        </p>
        <p className="my-2 mx-4 p-2">
          What makes Market Box unique is its slow and steady building of relationships with a consistent rotation of households. Ahead of each delivery round, households receive a check-in call from a volunteer. The regular communication during this time of isolation is what allowed for special community building projects, like supplying custom-selected children’s books through local bookstores at Christmas time, or oral history storytelling about the pandemic.
        </p>
        <p className="my-2 mx-4 p-2">
          We see this initiative of mutual aid as a form of direct action against the government malfeasance and state-sanctioned violence of food insecurity. By creating new relationships across the South Side of Chicago and reimagining how neighbors can act with accountability towards each other, we can generate community power in the face of government neglect.
        </p>
      </Col>
    </Row>
  </Layout>
  )
}

export default AboutPage
