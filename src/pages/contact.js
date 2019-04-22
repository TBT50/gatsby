import React from "react"
import Header from "../components/header"
import MainNav from "../components/nav"
import Footer from "../components/footer"

export default () => {
  return (
    <div>
      <header>
        <Header headerText="Contact page" />
        <MainNav />
        <p>
          My twitter <a href="https://twitter.com/_PiotrK_">profile</a>
        </p>
      </header>
      <Footer />
    </div>
  )
}
