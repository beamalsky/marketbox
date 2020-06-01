import React from "react"
import { Row, Col, Button } from "react-bootstrap"

import VizContext from "../context/vizcontext"
import Layout from "../components/layout"
import Section from "../components/section"
import Image from "../components/image"
import parse from "../components/smarter-text"
import SEO from "../components/seo"

const sliderSections = [
  {
    filename: 'sentence1',
    text: 'If {0-1000:people} people 💃 donate an average of ${0-100:donation} 💰, Market Box will raise ${=people * donation:total}. That\'s enough to fund 200 local food boxes 📦 per week for {=total / 8000 :weeks} weeks—{=200 * weeks:total_boxes} boxes total! That ${=people * donation:total_two} goes directly to Star Farm Chicago, to grow veggies 🥕🍆🍅🥒🍑🥔🍓,  buy eggs and bread 🍳 🥖, and get it to our neighbors. Your dollars support small farmers and producers and pay {=total/5000:drivers} drivers a living wage to get groceries to doorsteps. 🏡 🚗'
  },
  {
    filename: 'sentence2',
    text: 'Say you give ${0-100:donation_two} and share Market Box on Instagram/Facebook/Twitter. 📨 You have {0-5000:followers} followers 🕺. If {0-50:seen}% see that post, you’ve told {=followers * seen / 100:shares} people about Market Box. 👩‍👩‍👦 If {0-50:percent}% of those people give an average of ${0-100:donation_three}, you and your friends have funded {=(shares * percent / 100 * donation_three + donation_two) / 40:boxes} Market Boxes!  👪👨‍👦‍👦‍👩‍👩‍👦'
  }
]

const textVars = sliderSections.reduce(
  (m, t) => ({ ...m, [t.filename]: [...parse(t.text), t.text] }),
  {}
);

const IndexPage = (data) => {
  return (
    <VizContext.Consumer>
        {vizState => (
          <Layout>
            <SEO title="Home" />
            <Row>
              <Col className="ml-md-4 mr-0">
                <h4 className="my-2 mx-4 p-2">
                  <a href="https://experimentalstation.org/">Experimental Station</a> is working with <a href="https://www.starfarmchicago.net/">Star Farm Chicago</a> to provide boxes of locally sourced produce, eggs, and bread to our neighbors on the South Side, supporting the community and the farmers that feed us.
                </h4>
                <p className="my-2 mx-4 p-2">
                  Because Link cards can’t be used online outside of a handful of corporate providers, right now people using SNAP are not only shut out from accessing affordable, local, organically grown produce, but also from supporting small farmers. Our project prioritizes black and low income residents in Woodlawn and across the South Side. We’re working to supply 200 boxes of food a week for the rest of the month.
                </p>
                <h4 className="my-2 mx-4 p-2">We can’t do this alone! Can you give a box?</h4>
                <div class="text-center">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={()=> window.open(
                      "https://experimentalstation.org/checkout/donate?donatePageId=5ea5dfb0b96d8067d449bc46", "_blank"
                    )}
                  >
                    Give a Box
                  </Button>
                  {' '}{' '}{' '}{' '}
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={()=> window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfykYDUS2EB9pyMEb1wNPhVEL3bttwKgeYIe5dX6mKpffd7vw/viewform",
                      "_blank"
                    )}
                  >
                    Get a Box
                  </Button>
                </div>
              </Col>
              <Col className="mr-md-4 ml-0">
                <p className="my-2 mx-4 p-2">
                  <b>Can you help strengthen our ecosystem in the pandemic?</b> Change the numbers below to estimate your impact!
                </p>
                {sliderSections.map((element) => {
                    var page = element.filename
                    var [ast, astState, rawText] = textVars[page]

                    return <Section
                      ast={ast}
                      astState={astState}
                      rawText={rawText}
                      page={page}
                      vizState={vizState}
                    />
                  }
                )}
              </Col>
            </Row>
            <Image />
          </Layout>
        )}
    </VizContext.Consumer>
  )
}

export default IndexPage
