import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="full-width center">
          &copy; {new Date().getFullYear()}{" "}
          <Link to="/">jp-en visual dictionary</Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  .footer {
    height: 1.8rem;
    background: var(--bg);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.4);
  }
  div {
    line-height: 2rem;
    vertical-align: middle;
  }
  a {
    text-decoration: underline !important;
  }
`
export default Footer
