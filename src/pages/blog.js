import React from "react"
import Header from "../components/header"
import MainNav from "../components/nav"
import Footer from "../components/footer"
import BlogPost from "../components/blog-post"

export default () => {
  return (
    <div>
      <header>
        <Header headerText="Blog page" />
        <MainNav />
      </header>
      <main>
        <BlogPost title="Article1 title" content="Article1 content" />
        <BlogPost title="Article2 title" content="Article2 content" />
      </main>
      <Footer />
    </div>
  )
}
