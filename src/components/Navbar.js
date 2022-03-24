import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="full-width">
          <ul className="nav-links">
            <li>
              <Link to="/">
                <h2>JP-EN Visual Dictionary</h2>
              </Link>
            </li>
            <li>
              <div>
                <a href="https://jpenphrase.netlify.app" target="_blank">
                  Phrasebook
                </a>
                <ThemeToggler>
                  {({ theme, toggleTheme }) => (
                    <label>
                      <input
                        className="toggle"
                        type="checkbox"
                        onChange={e =>
                          toggleTheme(e.target.checked ? "dark" : "light")
                        }
                        checked={theme === "dark"}
                      />{" "}
                      Dark
                    </label>
                  )}
                </ThemeToggler>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .nav-links {
    padding-top: 1rem;
    margin: 0;
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  .toggle {
    margin-left: 1rem;
  }
`

export default Navbar
