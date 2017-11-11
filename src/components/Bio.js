import React from 'react'
import Avatar from './Avatar.js'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
			<div className="Bio">
				<h2 className="Bio-highlight u-marginBs">Finding someone that can code is easy.</h2>
					<p className="u-marginBs">
						Finding a <span className="u-textBold">front-end web developer</span> that can merge into your project management and work with your designers and back-end developers to deliver a user-interface that's responsive, modular, and future friendly?
					</p>
					<p className="Bio-highlight Bio-highlight--impact u-marginBb">
						That's where I come in.
					</p>
					<p className="u-marginBs">
						I work with clients who want to stop wasting their time and money on developers that deliver terrible, unmaintainable front-end code.
					</p>
					<p className="u-marginBs">
						My user-first approach has brought teams to win <a href="http://myql.com/">JD Power Awards for our responsive web apps</a>, and Google’s “Game Changer” award for creating a <a href="https://leveleleven.com/">Fitbit for sales</a>.
					</p>
					<p className="u-marginBs">
						I specialize in HTML, CSS, and ReactJS to help you build modular and semantic web components for the modern browser.
					</p>
					<p>
						I’m Agile ready and available for freelance remote work—if you would like to build something together, feel free to <a href="mailto:RVxMendoza@gmail.com">get in touch</a>.
					</p>


        <div className="u-indent u-marginTl u-flex u-flexCol u-md-flexRow u-md-flexJustifyBetween u-flexAlignItemsCenter">
          <div>
						<Avatar
							src={profilePic}
							size="large"
						/>
					</div>
					<p className="Bio-text--smaller">
						I’m also an LGBTQ Activist, an emotional intelligence coach and a Disco Pop Diva.

						Get your entire life on <a href="https://www.instagram.com/rvxmendoza/">my Instagram</a>.
					</p>
				</div>
			</div>
    )
  }
}

export default Bio
