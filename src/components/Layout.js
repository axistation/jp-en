import React from "react"
import Navbar from "./Navbar"
import Menubar from "./Menubar"
import Footer from "./Footer"

import styled from "styled-components"

import "normalize.css"
// import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <div className="sticky">
        <Menubar />
      </div>

      <div className="full-width content">
        <div className="container">
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  * {
    font-family: "Roboto";
    margin: 0;
    padding: 0;
    text-transform: capitalize;
  }
  .container {
    max-width: 968px;
    margin: 0 auto;
    padding: 1rem 0;
  }
  .full-width {
    max-width: 95%;
    margin: 0 auto;
  }
  .center {
    text-align: center;
  }
  a {
    text-decoration: none; /* no underline */
    color: #333;
  }
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 99;
  }
  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`

export default Layout
