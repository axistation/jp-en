import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="full-width">
          <div className="nav-links">
            <h2 className="nav-link">
              <Link to="/">JP-EN Visual Dictionary</Link>
            </h2>
            <span className="seperator">|</span>
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
    display: inline;
    color: rgb(168, 44, 44);
    font-weight: 500;
  }

  .seperator {
    margin: 0 1rem;
  }
`

export default Navbar
