import React from 'react'
import Link from 'gatsby-link'
import "../styles/index.scss"

import Header from "../components/Header.js"
import Section from "../components/Section.js"
import Bio from "../components/Bio.js"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
				<Header
					location={location}
				/>
				<Bio />
				<Section title="What I Can Do For You" >
					Services list
				</Section>
				<Section title="Latest Posts" >
					{children()}
				</Section>
				<Section title="The Hype" >
					Testimonies
				</Section>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
