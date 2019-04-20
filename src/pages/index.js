import React from "react"
import Header from "../components/header"

export default () => (
  <header>
    <Header headerText="Main page" />
    <p style={{ color: `green` }}>
      It's looking better and better but I still dont quite understand what's is
      going on
    </p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </header>
)
