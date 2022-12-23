import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import ImageHome01 from "../components/imagehome01"
import ImageHome02 from "../components/imagehome02"
import ImageHome03 from "../components/imagehome03"
import ImageHome04 from "../components/imagehome04"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Market Box" />
      <div className="d-sm-none">
        <ImageHome01 />
      </div>
      <Row className="align-items-center">
        <Col className="" sm={12} md={7}>
          <p className="my-2 mx-4 p-2">
            <strong>Thousands of deliveries in,</strong> we're turning an emergency pandemic response into a year-round, sustainable ecosystem. Our network is a place to generate <strong>community power</strong>, <strong>take care of one another</strong>, and <strong>exchange critical information as neighbors</strong>.
          </p>
          <div class="text-center">
            <Button
              variant="secondary"
              size="sm"
              className="mx-2 my-2"
              onClick={() => window.open(
                "https://bit.ly/drivemarketbox", "_blank"
              )}
            >
              Volunteer
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="mx-2 my-2"
              onClick={() => navigate("/donate")}
              role="link"
            >
              Donate
            </Button>
            <Button
              variant="success"
              size="sm"
              className="mx-2 my-2"
              onClick={() => window.open(
                "https://airtable.com/shr1PQl1JKn2gvrXJ",
                "_blank"
              )}
            >
              Sign Up
            </Button>
          </div>
          <p className="my-2 mx-4 p-2">
            We root this mutual aid initiative in a long tradition of collaboration in the Woodlawn neighborhood of Chicago. Our list of recipients on the South Side of Chicago includes 400 households, self-identified as Black and low-income.
          </p>
          <p className="my-2 mx-4 p-2">
            By maintaining a slow-growing rotation of recipients, <strong>we’re building long-term relationships of care.</strong> We rely on a broad, grassroots base of recurring donations to fuel our work, allowing us to commit to local farms and South Side families one growing season at a time: every donation acts twice, <strong>funding an ethical food system</strong> and <strong>putting food on our neighbor’s tables</strong>.
          </p>
          <div className="d-none d-sm-block">
            <ImageHome01 />
          </div>
        </Col>
        <Col className="" sm={12} md={5}>
          <ImageHome04 />
          <ImageHome03 />
          <ImageHome02 />
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
