import React from 'react'
import Avatar from './Avatar.js'
import MailIcon from '-!svg-react-loader?name=Mail!../../static/mail.svg';

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
			<div className="Bio u-paddingRm">
				<h2 className="Bio-highlight u-marginBs">Finding someone that can code is easy.</h2>
				<p className="u-marginBs">
					But what about finding a <span className="u-textBold">front-end developer</span> that can merge into your project management and work with your designers and back-end developers to deliver a user-interface that works for everyone, everywhere, every time?
				</p>
				<p className="Bio-highlight Bio-highlight--impact u-marginBb">
					That's where I come in.
				</p>
				<p className="u-marginBs">
					I work with clients who want to stop wasting their time and money on front-end web developers that deliver <span className="u-textBold">unmaintainable code that causes them more work</span> in the future.
				</p>
				<p className="u-marginBs">
					My user-first approach to user interface development has empowered organizations from <a href="https://www.quickenloans.com/">multi-billion dollar financial institutions</a>, to <a href="https://leveleleven.com/">start-ups looking to pioneer an uncharted industry</a>.
				</p>
				<p className="u-marginBs">
					I’ve helped teams win an array of accolades like <a href="https://www.myql.com/">JD Power Awards for our responsive web apps</a>, and Google’s “Game Changer” award for creating a <a href="https://leveleleven.com/product-tour/">Fitbit for sales.</a>
				</p>
				<p className="u-marginBs">
					I specialize in <a href="https://github.com/RVMendoza">HTML, CSS, and ReactJS</a> to help you build modular and semantic web components for the modern browser.
				</p>
				<p className="u-marginBs">
					I’m Agile ready and available for freelance remote work—if you would like to build something together, feel free to <a className="u-textBold" href="mailto:RVxMendoza@gmail.com">get in touch</a>.
				</p>
				{/*
				<p className="u-marginBs">
					If you're still shopping around, let me help you. Here are <a href="#">10 ways to figure out if a front-end developer actually knows what they're doing.</a>
				</p>

				*/}

        <div className="u-md-indent u-marginTl u-flex u-flexCol u-md-flexRow u-md-flexJustifyBetween u-flexAlignItemsCenter">
          <div>
						<Avatar
							src={profilePic}
							size="large"
						/>
					</div>
					<p className="Bio-text--smaller">
						I’m also an LGBTQ Activist, an <a href="https://medium.com/becoming-the-adult-i-needed">emotional intelligence coach</a> and a <a href="https://open.spotify.com/artist/0YVK604Puec6VbHp2x59Il">Disco Pop Diva</a>.

						Get your entire life on <a href="https://www.instagram.com/rvxmendoza/">my Instagram</a>.
					</p>
				</div>
				{/*
				<div className="StickyAction">
					<div className="StickyAction-content u-alignMiddleA">
						<div className="Icon">
							<MailIcon />
							</div>
					</div>
				</div>
				*/}
			</div>
    )
  }
}

export default Bio
