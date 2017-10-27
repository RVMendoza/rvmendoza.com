import React from 'react'
import Link from 'gatsby-link'
import "../styles/index.scss"

import Header from "../components/Header.js"
import Section from "../components/Section.js"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
				<Header
					location={location}
				/>
				<Section title="What I Can Do For You" >
					Services list
				</Section>
				<Section title="The Hype" >
					Testimonies
				</Section>
				<Section title="The Hype" >
					Latest Posts
				</Section>
        {children()}
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
