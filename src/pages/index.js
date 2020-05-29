import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"
import parse from "../components/smarter-text"
import SEO from "../components/seo"

const textFiles = [
  {
    filename: 'marketbox',
    text: '🥕 If we have donations from {100:donation_people} people 💃 each week at an average of ${100:donation_amount} 💰, the Market Box program will have ${=donation_people * donation_amount:donation_total} 🤑 to support Star Farm’s local agriculture and {=donation_total / 45:boxes} boxes of groceries 🍅 for people in need.'
  }
]

const textVars = textFiles.reduce(
  (m, t) => ({ ...m, [t.filename]: [...parse(t.text), t.text] }),
  {}
);

const IndexPage = () => {
  const page = 'marketbox'
  const [ast, astState, rawText] = textVars[page]

  return (
    <Layout>
      <SEO title="Home" />
      <Section
        ast={ast}
        astState={astState}
        rawText={rawText}
        page={page}
      />
    </Layout>
  )
}

export default IndexPage
