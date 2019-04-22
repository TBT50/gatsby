import React from "react"
import Header from "../components/header"
import MainNav from "../components/nav"
import Footer from "../components/footer"

export default () => {
  return (
    <div>
      <header>
        <Header headerText="Main site" />
        <MainNav />
      </header>
      <Footer />
    </div>
  )
}
