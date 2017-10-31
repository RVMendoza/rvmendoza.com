import React from 'react'
import Link from 'gatsby-link'
import "../styles/index.scss"

import Header from "../components/Header.js"
import Section from "../components/Section.js"
import ServicesList from "../components/ServicesList.js"
import Bio from "../components/Bio.js"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
			<div className="App u-flex u-flexCol u-flexAlignItemsCenter">
        <header className="u-flex u-flexCol u-flexAlignItemsCenter">
					<Header
						location={location}
					/>
          <div className="App-bio u-paddingAm">
						<Bio />
					</div>
				</header>
        <div className="App-body u-paddingAm">
					<Section title="Here's What I Can Do For You" className="u-marginBm">
						<ServicesList />
					</Section>
					<Section title="Latest Posts" className="u-marginBm">
						{children()}
					</Section>
					<Section title="The Hype" className="u-marginBm">
						Testimonies
					</Section>
				</div>
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
