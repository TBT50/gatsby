import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/blog/">Blog</Link>
      <Link to="/contact/">Contact</Link>
    </nav>
  )
}
