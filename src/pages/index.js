import React from "react"

import VizContext from "../context/vizcontext"
import Layout from "../components/layout"
import Section from "../components/section"
import parse from "../components/smarter-text"
import SEO from "../components/seo"

const textFiles = [
  {
    filename: 'intro1',
    text: 'Experimental Station is working with Star Farms Chicago to provide boxes of locally sourced produce, eggs, and bread to our neighbors on the South Side, supporting the community and the farmers that feed us.'
  },
  {
    filename: 'intro2',
    text: 'Because Link cards can’t be used online, right now people using SNAP are not only shut out from accessing affordable, local, organically grown produce, but also from supporting small farmers. Through mutual aid, our ecosystem can grow stronger during the pandemic!'
  },
  {
    filename: 'sentence1',
    text: 'If {0-500:people} people 💃 donate an average of ${0-100:donation} 💰, Market Box will raise ${=people * donation:total}: enough to fund 200 local food boxes 📦 per week for {=total / 800 :weeks} weeks!  That ${=people * donation:total_two} goes directly to Star Farm Chicago, to grow veggies 🥕🍆🍅🥒🍑🥔🍓,  buy eggs 🍳 and bread 🥖, and get it to our neighbors. Your dollars support small farmers and producers and pay {=total/500:drivers} drivers a living wage to get groceries to doorsteps. 🏡 🚗'
  },
  {
    filename: 'sentence2',
    text: 'Say you give ${0-100:donation_two} and share Market Box on Instagram/Facebook/Twitter. 📨 You have {0-5000:followers} followers. 🕺 If {0-50:seen}% see that post, you’ve told {=followers * seen / 100:shares} people about Market Box. 👩‍👩‍👦 If {0-50:percent}% of those people give an average of ${0-100:donation_three}, you and your friends have funded {=shares * percent / 100 * donation_three + donation_two/ 40:boxes} Market Boxes!  👪👨‍👦‍👦‍👩‍👩‍👦'
  }
]

const textVars = textFiles.reduce(
  (m, t) => ({ ...m, [t.filename]: [...parse(t.text), t.text] }),
  {}
);

const IndexPage = () => {
  return (
    <VizContext.Consumer>
        {vizState => (
          <Layout>
            <SEO title="Home" />
            {textFiles.map((element) => {
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
          </Layout>
        )}
    </VizContext.Consumer>
  )
}

export default IndexPage
