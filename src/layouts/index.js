import React from 'react'
import Link from 'gatsby-link'
import "../styles/index.scss"

import Header from "../components/Header.js"
import Section from "../components/Section.js"
import ServicesList from "../components/ServicesList.js"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
			<div className="App">
        <header className="App-header u-flex u-flexCol u-flexAlignItemsCenter u-marginBl">
					<Header
						location={location}
					/>
				</header>
				<div className="App-body">
					{children()}
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
