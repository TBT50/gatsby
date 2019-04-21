import React from "react"
import Header from "../components/header"
import MainNav from "../components/nav"

export default () => (
  <div style={{ color: `blue` }}>
    <Header headerText="About Gatsby" />
    <MainNav />
    <p>Such a nice static site generator</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
