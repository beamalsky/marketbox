import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        maxWidth: '1200px'
      }}
    >
      <p>
        Footer text goes here. Additional credits maybe? Market Box is a project of...
      </p>
      <p>
        This website was made by Bea Malsky and uses the <a href="https://github.com/postlight/account">Account</a> tool from <a href="https://postlight.com/labs">Postlight Labs</a>. All code is open source <a href="https://github.com/beamalsky/marketbox">here</a>.
      </p>
    </div>
  </footer>
)

export default Footer
