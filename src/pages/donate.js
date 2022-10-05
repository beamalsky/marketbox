import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import ImageEggs from "../components/imageeggs"
import DonorboxWidget from "../components/donorboxwidget"
import SEO from "../components/seo"

const DonatePage = () => {
  return (
    <Layout>
    <SEO title="Market Box" />
    <Row className="justify-content-center">
      <Col className="" sm={12} md={7}>
        <ImageEggs />
        <p className="my-2 mx-4 p-2">
          Market Box is a volunteer-driven mutual aid project that bulk-buys food from small farms and distributes it for free to over 400 households per month across the South Side of Chicago. Recurring tax deductible donations mean we can commit to South Side families and local farmers a full season at a time. Can you help us build?
        </p>
        <p className="my-2 mx-4 p-2">
          <DonorboxWidget />
        </p>
        <p className="my-2 mx-4 p-2">
          Market Box is a project of Ecosystems of Care, a 501(c)(3) formed in 2021 to ensure the sustainability and independence of Market Box and other projects on the South Side of Chicago. Your donation to Ecosystems of Care, NFP, directly supports Market Box.
        </p>
        <p className="my-2 mx-4 p-2">
          If you prefer to donate by check, you can make out your check, and mail it to:
        </p>
        <p className="my-2 mx-4 p-2">
          Ecosystems of Care, NFP<br />
          PO Box 377830<br />
          700 E 61st St.<br />
          Chicago, IL 60637
        </p>
        <p className="my-2 mx-4 p-2">
          Please include Market Box in the memo section of your check.
        </p>
        <p className="my-2 mx-4 p-2">
          <strong>Does your employer match donations?</strong><br />
          Some employers match donations their employees make to charitable organizations, which can be an easy, powerful way to double your impact. To see if your employer matches, reach out to your HR department and they will be able to guide you through the process. Once you have submitted the matching request form, please let us know by emailing info@ecosystemsofcare.org.
        </p>
        <p className="my-2 mx-4 p-2">
          Ecosystems of Care is a 501(c)3 organization registered in the United States of America (EIN 87-1345182).
        </p>
      </Col>
    </Row>
  </Layout>
  )
}

export default DonatePage
