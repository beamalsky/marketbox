import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import ImageBrigid from "../components/imagebrigid"
import ImageHannah from "../components/imagehannah"
import ImageMaira from "../components/imagemaira"
import ImageVolunteers from "../components/imagevolunteers"
import SEO from "../components/seo"

const BiosPage = () => {
  return (
    <Layout>
    <SEO title="Market Box" />
    <Row className="justify-content-center">
      <Col className="" sm={12} md={7}>
        <h1>LEADERSHIP TEAM</h1>
        <p className="my-2 mx-4 p-2">
          <strong>Brigid Maniates</strong> (she/her) is the director of operations of the South Side Weekly, where she also manages  Common Operations, a shared back office service for nonprofits. Previous to her work at the Weekly, she worked for the Experimental Station where she was responsible for their finances and operations. Brigid brings her operations and non-profit governance experience to Market Box, managing the food packing days, finances, and long term strategy. She also serves on the boards of the Hyde Park Historical Society and Chicago Film Society, and advocates for community involvement in local parks.
        </p>
        <ImageBrigid />
        <p className="my-2 mx-4 p-2">
          <strong>Hannah Nyhart</strong> (she/her) is the co-founder of Build Coffee, a coffee shop, bookstore, and gathering space in the Experimental Station. Over three years of operations ahead of the pandemic, the café built a committed and diverse customer base, and underwent rapid year over year growth. In the pandemic, Hannah has applied community building and operations skills to Market Box, managing partner relationships and recruiting and coordinating over 500 participants and 150 volunteers.
        </p>
        <ImageHannah />
        <p className="my-2 mx-4 p-2">
          <strong>Maira Khwaja</strong> (she/her) is director of public strategy at the Invisible Institute, where she makes information about police misconduct and accountability accessible to populations most affected by government negligence. A year into co-organizing Market Box, she has led a team of volunteers to collect oral histories from recipients on their pandemic and housing experiences, to be archived at the Chicago History Museum. During the protests over the past year, she partnered with organizers and mutual aid sites across the city to answer questions about police and government resources, sign up recipients for Market Box, and provide critical information in the form of flyers and newsletters from the Invisible Institute in food distribution efforts. Her writing on mutual aid and base-building in Chicago has been published in the <a href="https://www.nytimes.com/2021/03/11/opinion/covid-mutual-aid-chicago.html">New York Times</a>.
        </p>
        <ImageMaira />
        <br />
        <h1>CORE ORGANIZATIONS</h1>
        <p className="my-2 mx-4 p-2">
          <strong>Build Coffee</strong> is a coffee shop and bookstore in the Experimental Station on the South Side of Chicago. Surrounded by community-driven non-profits and civic journalism projects, Build is designed as a hub of great coffee and radical collaboration. Build has offered storage and other critical infrastructure to Market Box this past year. Many of the shop’s regulars are committed participants and volunteers in the program, reimagining what a community hub looks like outside a physical room.
        </p>
        <p className="my-2 mx-4 p-2">
          <strong>The Invisible Institute</strong> is a journalism production company working to enhance the capacity of citizens to hold public institutions accountable. Through Market Box, the Invisible Institute stays in touch with families most affected by government negligence, holding its work accountable to experiences shared on the ground; building conversation through monthly newsletters, storytelling phone conversations, and, this summer, outdoor gatherings. Invisible Institute acts as fiscal sponsor to Market Box.
        </p>
        <br />
        <h1>SOURCING PARTNERS</h1>
        <p className="my-2 mx-4 p-2">
          Over the past year, Market Box has sourced from over 35 farmers and producers across the Midwest, at a scale that allowed farms to retain staff and make infrastructure investments, while getting healthy food to people with access barriers. Right now, Market Box centers on two core sourcing relationships:
        </p>
        <p className="my-2 mx-4 p-2">
          <strong>Bungalow by Middlebrow</strong> is a craft bakery in Back of the Yards, on the South Side of Chicago. Middlebrow supplies discounted bread to Market Box via their matching subscription program, in which customers purchase one loaf for themselves, and subsidize another for a neighbor.
        </p>
        <p className="my-2 mx-4 p-2">
          <strong>Local Foods</strong> is a grocery store and wholesaler that works directly with small local farms and vendors to ensure quality and freshness, building a robust community that encourages the best practices and supports our local food systems. Local foods has been a committed Market Box partner since January 2021, filling bags with over 4,000 lbs a week of seasonal vegetables and ethical meat and eggs from farms across the Midwest.
        </p>
        <br />
        <h1>VOLUNTEERS</h1>
        <ImageVolunteers />
        <p className="my-2 mx-4 p-2">
          Over the past year, Market Box has leveraged the resources and operations of our partner organizations, while remaining deeply committed to a mutual aid framework. As of April 2021, <strong>over 150 volunteers</strong> had packed, driven, or phone-banked for Market Box. The project is fueled by a core, committed team of <strong>50 recurring volunteers</strong>, who have a consistent monthly or bi-monthly commitment to the project, and have already pledged their time through summer 2021.
        </p>
      </Col>
    </Row>
  </Layout>
  )
}

export default BiosPage
