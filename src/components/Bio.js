import React from 'react'
import Avatar from './Avatar.js'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
			<div className="u-flex u-flexCol u-md-flexRow u-flexAlignItemsCenter">
        <div>
					<Avatar
						src={profilePic}
						size="large"
					/>
				</div>
        <div className="u-paddingAm">
					<p className="Bio-text">
						Written by <strong>RV Mendoza</strong> who lives and works in Detroit building useful things.{' '}
						<a href="https://twitter.com/rvxmendoza">
							You should follow him on Twitter
						</a>
					</p>
				</div>
			</div>
    )
  }
}

export default Bio
