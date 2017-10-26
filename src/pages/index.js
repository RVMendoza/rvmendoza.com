import React from "react"
import Link from "gatsby-link"
import "../styles/main.css"

export default () =>
  <div className="u-flex">
    <header>
      <Link to="/">
        <h1>RV Mendoza</h1>
      </Link>
    </header>
    <p>What a world.</p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <Link to="/page-2/">Link</Link>
  </div>