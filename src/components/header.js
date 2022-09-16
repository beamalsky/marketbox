import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Row, Col } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0.75rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 660,
        padding: `1.45rem 1.0875rem 1rem 1.0875rem`,
        textAlign: `center`,
      }}
    >
      <h1 style={{ 
        margin: 0, 
        fontSize: '5rem', 
        letterSpacing: '.5rem',
        lineHeight: '4rem',
        paddingBottom: '1rem',
      }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          MARKET BOX
        </Link>
      </h1>
      <h4>is a mutual aid project that sources food from small farms and distributes it for free across the South Side of Chicago</h4>
      <Row className="justify-content-md-center my-3">
        <Col xs lg="2">
          <Link to="/">
            Home
          </Link>
        </Col>
        <Col xs lg="2">
          <Link to="/about">
            About
          </Link>
        </Col>
        <Col xs lg="2">
          <Link to="/join-us">
            Join Us
          </Link>
        </Col>
        <Col xs lg="2">
          <Link to="/donate">
            Donate
          </Link>
        </Col>
      </Row>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
