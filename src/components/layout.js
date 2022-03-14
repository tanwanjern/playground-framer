import * as React from "react"
import PropTypes from "prop-types"

import "../styles/global.css"
import "../styles/tailwind.css"

const Layout = ({ children, className }) => {
  return (
    <main className={className}>{children}</main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
