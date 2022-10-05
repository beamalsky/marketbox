import React from "react"

const DonorboxWidget = () => (
  <>
    <script
      src="https://donorbox.org/widget.js"
      paypalExpress="false">
    </script>
    <iframe
      src="https://donorbox.org/embed/market-box-chicago"
      name="donorbox"
      title="donorbox"
      allowpaymentrequest="allowpaymentrequest"
      seamless="seamless"
      frameborder="0"
      scrolling="no"
      height="515px"
      width="100%"
      style={{
        maxWidth: "500px",
        minWidth: "250px",
        maxHeight: "none!important",
        marginBottom: 0,
      }}>
    </iframe>
  </>
)

export default DonorboxWidget
