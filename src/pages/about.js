import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import ImageAbout01 from "../components/imageabout01"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
    <SEO title="Market Box" />
    <Row className="justify-content-center">
      <Col className="" sm={12} md={7}>
        <ImageAbout01 />
        <p className="my-2 mx-4 p-2">
          Market Box crowd-funds to bulk-buy produce from across the midwest, and distributes over 420 bags of food each month to our network of families on the South Side. Our twice-monthly, volunteer-led distribution days are based at First Presbyterian Church in Chicago’s Woodlawn neighborhood. Together, we seek to build a local food system rooted in mutuality and community care.
        </p>
        <p className="my-2 mx-4 p-2">
          Market Box is a project of Ecosystems of Care, a 501(c)3 organization registered in the United States of America (EIN 87-1345182). 
        </p>
        <p className="my-2 mx-4 p-2">
          <strong>Our History</strong><br />
          Market Box was born as an emergency pandemic response in April 2020, to fight many of our neighbors’ growing food insecurity. We built this mutual aid initiative on a long tradition of collaboration between organizations in the Experimental Station, located in Chicago’s Woodlawn Neighborhood. In a moment when food stamps could not be used online, we began Market Box with the 61st Street Farmers Market, to make sure our neighbors who used the Market’s LINK matching program could still access produce, eggs, bread, and meat.
        </p>
        <p className="my-2 mx-4 p-2">
          We originally built Market Box on a Community Supported Agriculture model from Star Farm Chicago, a non-profit farm on the city’s Southwest Side. As we expanded, we partnered with Local Foods Chicago, a grocery store that sources from farms within a day’s freight range of the city. Through these partnerships, we’ve sourced from over 35 small to medium-sized farms, in some cases helping to ensure small farm’s survival through the pandemic. This ecosystem, neighbors funding farmers to feed neighbors, was intentional. Throughout the pandemic, we saw grocery chains and Amazon mark record profits while our communities suffered untold loss: we wanted to support systems that would love us back.
        </p>
        <p className="my-2 mx-4 p-2">
          We tapped existing networks and partnered with other mutual aid projects, like Washington Park’s People’s Grab-N-Go to sign up our neighbors. Our network now holds over 450 households, self-identified as Black and low-income. With every bag of food we work toward two goals: to get fresh produce to our neighbors and to support farms across the midwest.
        </p>
        <p className="my-2 mx-4 p-2">
          What makes Market Box unique is its slow and steady building of relationships with a consistent rotation of households. Ahead of each delivery round, households receive a check-in call from a volunteer. That consistent contact has seeded other projects: in Market Box’s short tenure we have phonebanked seniors to help them get vaccinated, distributed hundreds of books and backpacks to kids going back to school, and helped parents and grandparents get Christmas presents to their children. We’ve seen how taking care of each other can build civic power: through our network, neighbors who received deliveries or volunteered were also connected to tenant organizing, park preservation, and local elections.
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
