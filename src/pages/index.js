import React from "react"
import { Row, Col, Button } from "react-bootstrap"

import Layout from "../components/layout"
import ImageWheelbarrow from "../components/imagewheelbarrow"
import ImageSunflowers from "../components/imagesunflowers"
import ImagePacking from "../components/imagepacking"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Market Box" />
      <Row className="align-items-center">
        <Col className="" sm={12} md={7}>
          <p className="my-2 mx-4 p-2">
            <strong>Thousands of deliveries in,</strong> we're turning an emergency pandemic response into a year-round, sustainable ecosystem. Our network is a place to generate <strong>community power</strong>, <strong>take care of one another</strong>, and <strong>exchange critical information as neighbors</strong>.
          </p>
          <div class="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={()=> window.open(
                "https://invisible.ourpowerbase.net/civicrm/contribute/transact?reset=1&id=5", "_blank"
              )}
            >
              Donate
            </Button>
            {' '}{' '}{' '}{' '}
            <Button
              variant="secondary"
              size="lg"
              onClick={()=> window.open(
                "https://airtable.com/shr1PQl1JKn2gvrXJ",
                "_blank"
              )}
            >
              Sign Up
            </Button>
          </div>
          <p className="my-2 mx-4 p-2">
            We root this mutual aid initiative in a long tradition of collaboration between organizations in our building, the Experimental Station, located in the Woodlawn neighborhood of Chicago. Our list of recipients on the South Side of Chicago includes 400 households, self-identified as Black and low-income: by maintaining a slow-growing rotation of recipients, we’re building long-term relationships of care. We rely on a broad, grassroots base of recurring donations to fuel our work, allowing us to commit to local farms and South Side families one growing season at a time: every donation acts twice, funding an ethical food system and putting food on our neighbor’s tables.
          </p>
          <ImageSunflowers />
        </Col>
        <Col className="" sm={12} md={5}>
          <ImageWheelbarrow />
          <ImagePacking />
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
