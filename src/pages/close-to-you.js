import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import lyricsPic from './say-it.jpg'
import BookingImg from './booking.jpg'

class CloseToYou extends React.Component {
	render() {
		const siteTitle = "Close to You - RV Mendoza"
		const posts = get(this, 'props.data.allMarkdownRemark.edges')

		return (
			<div>
				<Helmet
					title={siteTitle}
				>
					<meta property="og:title" content={siteTitle}/>
					<meta property="og:image" content={lyricsPic}/>
					<meta name="google" value="notranslate"/>
				</Helmet>
				<div className="App-body u-marginBb">
					<main className="u-paddingRm">
						<h2 className="Headline Highlight u-textUppercase u-textBold u-marginBb">Close To You</h2>
						<div className="Highlight u-marginBm">
							<p>
								"I am becoming the adult I needed when I was younger. I am becoming the representation I needed, and the kindness I didn’t have. I bring that same promise as a queer Filipinx songwriter and performer. A promise to anyone that listens: if you continue to brave, you too will become the person you've always needed."
							</p>
							<p>- RV Mendoza</p>
						</div>
						<div className="Grid Grid--withGutter u-notFlush u-marginBl">
							<div className="Grid-cell u-md-size1of2">
								<iframe src="https://open.spotify.com/embed/track/6nWgG3bCRRnHkRAtNFa2vS" width="100%" height="300" frameBorder="0" allowTransparency="true"></iframe>
							</div>
							<div className="Grid-cell u-md-size1of2">
								<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/244525770&amp;color=%232f3033&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" width="100%" height="300" frameBorder="0" allowTransparency="true" scrolling="no" frameBorder="no"></iframe>
							</div>
						</div>


						<div className="Grid Grid--withGutter u-notFlush u-marginBm">
							<div className="Grid-cell u-md-size1of2">
								<img className="u-sizeFull" src={lyricsPic}/>
							</div>
							<div className="Grid-cell u-md-size1of2">
								<img className="u-sizeFull" src={BookingImg}/>
							</div>
						</div>

            <div className="u-notFlush">
							<p className="u-marginBb">
								As soon as our skin brushes
							</p>
							<p className="u-marginBb">
								I realize I want our lips to touch is...
							</p>
							<p className="u-marginBb">
								it cool if I end this thing called friends?
							</p>
							<p className="u-marginBm">
								Cause I'm in heaven with the strong signals you send
							</p>

							<p className="u-marginBb">
								You make me restless, anxious–like I’m doing something wrong
							</p>
							<p className="u-marginBb">
								You make me nervous, trip on purpose, now I'm falling to your love.
							</p>
							<p className="u-marginBb">
                Now both my eyes are closed
							</p>
							<p className="u-marginBb">
								and I finally know, that you might be the one
							</p>
							<p className="u-marginBb">
								I'm losing all control
							</p>
							<p className="u-marginBm">
								You smile, and I'm done for
							</p>

							<p className="u-marginBb u-textBold">
								I'm needing you.
							</p>
							<p className="u-marginBb u-textBold">
                Cue confetti, lights, slow motion view
							</p>
							<p className="u-marginBb u-textBold">
                Our hearts are beating
							</p>
							<p className="u-marginBb u-textBold">
                Things we can't undo
							</p>
							<p className="u-marginBm u-textBold">
                Oh how long I've been waiting to get close to you
							</p>

							<p className="u-marginBb">
                We're blowing steam through out clothes
							</p>
							<p className="u-marginBb">
                Flashes of skin and everywhere we touch glows
							</p>
							<p className="u-marginBb">
								Is it cool if I'm not feeling myself?
							</p>
							<p className="u-marginBm">
                There's something new– it's like electric through my cells.
							</p>

							<p className="u-marginBb u-textBold">
								I'm needing you.
							</p>
							<p className="u-marginBb u-textBold">
								Cue confetti, lights, slow motion view
							</p>
							<p className="u-marginBb u-textBold">
								Our hearts are beating
							</p>
							<p className="u-marginBb u-textBold">
								Things we can't undo
							</p>
							<p className="u-marginBm u-textBold">
								Oh how long I've been waiting to get close to you
							</p>

							<p className="u-marginBb">
								Give me a second, let me take this in
							</p>
							<p className="u-marginBb">
								Cause obivously my modesty is wearing thin
							</p>
							<p className="u-marginBb">
                Is it cool if violins play?
							</p>
							<p className="u-marginBm">
								You're technicolor when my life was really gray
							</p>

							<p className="u-marginBb">
								You make me restless, anxious–like I’m doing something wrong
							</p>
							<p className="u-marginBb">
								You make me nervous, trip on purpose, now I'm falling to your love.
							</p>
							<p className="u-marginBb">
                Now both my eyes are closed
							</p>
							<p className="u-marginBb">
								and I finally know, that you might be the one
							</p>
							<p className="u-marginBb">
								I'm losing all control
							</p>
							<p className="u-marginBm">
								You smile, and I'm done for
							</p>

							<p className="u-marginBb u-textBold">
								I'm needing you.
							</p>
							<p className="u-marginBb u-textBold">
                Cue confetti, lights, slow motion view
							</p>
							<p className="u-marginBb u-textBold">
                Our hearts are beating
							</p>
							<p className="u-marginBb u-textBold">
                Things we can't undo
							</p>
							<p className="u-marginBm u-textBold">
                Oh how long I've been waiting to get close to you
							</p>
						</div>
					</main>
				</div>
			</div>
		)
	}
}

export default CloseToYou
