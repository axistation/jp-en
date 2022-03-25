import React from "react"
import Navbar from "./Navbar"
import Menubar from "./Menubar"
import Footer from "./Footer"

import styled from "styled-components"

import "normalize.css"
import "../assets/css/main.css"

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
    max-width: 960px;
    margin: 2rem auto 4rem auto;
    /* padding: 1rem 0; */
  }
  .full-width {
    padding: 0 1rem;
    margin: 0 auto;
  }
  .center {
    text-align: center;
  }
  a,
  h2,
  label {
    text-decoration: none; /* no underline */
    color: var(--textNormal);
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
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 1rem;
    }
  }
`

export default Layout
