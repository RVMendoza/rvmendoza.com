import React from 'react'
import Avatar from './Avatar.js'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
			<div className="u-flex u-flexCol u-md-flexRow u-flexAlignItemsCenter u-md-flexJustifyCenter">
        <div>
					<Avatar
						src={profilePic}
						size="large"
					/>
				</div>
        <div className="u-paddingAm Bio-text">
					<p>
						I’m a <a href="https://github.com/RVMendoza" target="_blank">front-end web developer</a> and Detroit, Michigan is my home.
					</p>
					<p>
						HTML, CSS, and javascript are a given, but <a href="http://vimeo.com/68470326" target="_blank">doing the right thing</a> is what I care about the most.
					</p>
					Adding emotional intelligence to front-end web development, finance, and music performance.


				</div>
			</div>
    )
  }
}

export default Bio
