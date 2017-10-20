import React from "react"
import Link from "gatsby-link"
import "../styles/main.scss"

export default () =>
  <div>
    <header>
      <Link to="/">
        <h1>RV Mendoza</h1>
      </Link>
    </header>
    <p>What a world.</p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <Link to="/page-2/">Link</Link>
  </div>