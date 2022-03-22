import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="full-width">
          <h2>
            <Link to="/">JP-EN Visual Dictionary</Link>
          </h2>
          <div className="nav-links">
            <a
              className="nav-link"
              href="https://jpenphrase.netlify.app"
              target="_blank"
            >
              Phrasebook
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .navbar {
    background: #efefef;
    padding: 0.8rem 0;
  }
  a {
    color: #333;
  }
  h2 {
    margin: 0 !important;
  }

  .nav-link {
    display: inline-block;
    color: rgb(168, 44, 44);
    font-weight: 500;
  }
`

export default Navbar
