import React from "react"
import Header from "../components/header"
import MainNav from "../components/nav"

export default () => {
  return (
    <header>
      <Header headerText="Main site" />
      <MainNav />
    </header>
  )
}
