import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: `blue`, textAlign: `center` }}>
    <Header headerText="About Gatsby" />
    <p>Such a nice static site generator</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
