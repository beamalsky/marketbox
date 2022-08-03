import React from "react"
import { Row, Col, Button } from "react-bootstrap"

import Layout from "../components/layout"
import ImageGreatRoom from "../components/imagegreatroom"
import SEO from "../components/seo"

const JoinUsPage = () => {
  return (
    <Layout>
      <SEO title="Market Box" />
      <Row className="justify-content-center align-items-center">
        <Col sm={12} md={5}>
          <div class="text-center">
            <Button
              variant="primary"
              size="lg"
              className="my-2"
              onClick={() => window.open(
                "http://donorbox.org/market-box-chicago", "_blank"
              )}
            >
              Donate
            </Button>
          </div>
          <p className="my-2 mx-4 p-2">
            A one-time donation helps us deliver next month; a recurring donation can support a family all year. Your donations work twice: delivering predominantly Black & low-income households the freshest produce farmers can offer, while strengthening our local agriculture ecosystem. Every amount helps!
          </p>
        </Col>
        <Col className="" sm={12} md={5}>
          <p className="my-2 mx-4 p-2">
            To <strong>volunteer</strong>, head to: <a href="https://bit.ly/drivemarketbox">bit.ly/drivemarketbox</a>
          </p>
          <p className="my-2 mx-4 p-2">
            To sign yourself or a loved one up to <strong>receive regular free grocery deliveries</strong>, go to: <a href="https://bit.ly/marketboxsignup">bit.ly/marketboxsignup</a>
          </p>
          <p className="my-2 mx-4 p-2">
            To sign up for <strong>behind the scenes updates</strong> of our work, visit:  <a href="https://bit.ly/marketboxnews">bit.ly/marketboxnews</a>
          </p>
        </Col>
      </Row>
      <ImageGreatRoom />
    </Layout>
  )
}

export default JoinUsPage
