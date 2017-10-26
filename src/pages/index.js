import React from "react"
import Link from "gatsby-link"
import { Helmet } from "react-helmet";
import "../styles/main.css"

export default () =>
  <div className="u-flex">
		<Helmet>
				<meta charSet="utf-8" />
				<title>RV Mendoza - Emotional Intelligence and Front-end Web Development</title>
		</Helmet>
    <header>
      <Link to="/">
        <h1>RV Mendoza</h1>
      </Link>
    </header>
    <p>What a world.</p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <Link to="/page-2/">Link</Link>
  </div>