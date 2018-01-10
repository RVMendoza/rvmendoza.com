import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import lyricsPic from './you-blew-it.jpg'
import BookingImg from './booking.jpg'


class YouBlewIt extends React.Component {
	render() {
		const siteTitle = "You Blew It - RV Mendoza"
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
						<h2 className="Headline Highlight u-textUppercase u-textBold u-marginBb">You Blew It</h2>
						<div className="Highlight u-marginBm">
							<p>
								"I am becoming the adult I needed when I was younger. I am becoming the representation I needed, and the kindness I didn’t have. I bring that same promise as a queer Filipinx songwriter and performer. A promise to anyone that listens: if you continue to brave, you too will become the person you've always needed."
							</p>
							<p>- RV Mendoza</p>
						</div>
						<div className="Grid Grid--withGutter u-notFlush u-marginBl">
							<div className="Grid-cell u-md-size1of2">
								<iframe src="https://open.spotify.com/embed/track/7BS98GMgFBzQVyKjF62qOV" width="100%" height="300" frameBorder="0" allowTransparency="true"></iframe>
							</div>
							<div className="Grid-cell u-md-size1of2">
								<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/263103288&amp;color=%232f3033&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" width="100%" height="300" frameBorder="0" allowTransparency="true" scrolling="no" frameBorder="no"></iframe>
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

						<div className="u-notFlush u-sizeFull">
							<iframe width="100%" height="315" src="https://www.youtube.com/embed/eeDG5Dz-WPw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>

            <div className="u-notFlush">
							<p className="u-marginBb">
								I can feel your eyes on me when you think I'm not looking
							</p>
							<p className="u-marginBb">
								I know because I do the same damn thing
							</p>
							<p className="u-marginBb">
								Put your walls down baby I know,
							</p>
							<p className="u-marginBb">
								That you want me and you're feeling alone
							</p>
							<p className="u-marginBm">
								I know that you're feeling some type of way.
							</p>

							<p className="u-marginBb u-textBold">
								Oo...my lips are like honey
							</p>
							<p className="u-marginBb u-textBold">
								But you say you're not a bee
							</p>
							<p className="u-marginBb u-textBold">
								Lies! Lies! Lies!
							</p>
							<p className="u-marginBb u-textBold">
                That's a lie.
							</p>
							<p className="u-marginBm u-textBold">
               'Cause I know you're wanting me.
							</p>

							<p className="u-marginBb u-textBold">
								Ooo..you're looking like a dummy
							</p>
							<p className="u-marginBb u-textBold">
								All my crew can see you
							</p>
							<p className="u-marginBb u-textBold">
								You're putting me through it
							</p>
							<p className="u-marginBm u-textBold">
								Gave you one last chance and you blew it.
							</p>

							<p className="u-marginBb u-textBold">
								Ah...
							</p>
							<p className="u-marginBb u-textBold">
								I just want to dance by myself tonight
							</p>
							<p className="u-marginBb u-textBold">
                With all of my friends
							</p>
							<p className="u-marginBm u-textBold">
                All my crew tonight
							</p>

							<p className="u-marginBb u-textBold">
                I just want to dance by myself tonight cause
							</p>
							<p className="u-marginBb u-textBold">
								You're putting me through it
							</p>
							<p className="u-marginBm u-textBold">
                Gave you one last chance and you blew it.
							</p>


							<p className="u-marginBb">
                Picking up the pieces of my fragile bones (I know)
							</p>
							<p className="u-marginBm">
                Everything's completed, and my thoughts are home (I know)
							</p>


							<p className="u-marginBb u-textBold">
								Oo...my lips are like honey
							</p>
							<p className="u-marginBb u-textBold">
								But you say you're not a bee
							</p>
							<p className="u-marginBb u-textBold">
								Lies! Lies! Lies!
							</p>
							<p className="u-marginBb u-textBold">
                That's a lie.
							</p>
							<p className="u-marginBm u-textBold">
               'Cause I know you're wanting me.
							</p>

							<p className="u-marginBb u-textBold">
								Ooo..you're looking like a dummy
							</p>
							<p className="u-marginBb u-textBold">
								All my crew can see you
							</p>
							<p className="u-marginBb u-textBold">
								You're putting me through it
							</p>
							<p className="u-marginBm u-textBold">
								Gave you one last chance and you blew it.
							</p>

							<p className="u-marginBb u-textBold">
								Ah...
							</p>
							<p className="u-marginBb u-textBold">
								I just want to dance by myself tonight
							</p>
							<p className="u-marginBb u-textBold">
                With all of my friends
							</p>
							<p className="u-marginBm u-textBold">
                All my crew tonight
							</p>

							<p className="u-marginBb u-textBold">
                I just want to dance by myself tonight cause
							</p>
							<p className="u-marginBb u-textBold">
								You're putting me through it
							</p>
							<p className="u-marginBm u-textBold">
                Gave you one last chance and you blew it.
							</p>

							<p className="u-marginBb">
								(I'm not the kind of guy that's hard to hold)
							</p>
							<p className="u-marginBm">
								(I guess I'm carrying this heart alone)
							</p>

							<p className="u-marginBb">
                Oo..I'm looking like a dummy
							</p>
							<p className="u-marginBb">
                When you say you're not a bee
							</p>
							<p className="u-marginBb">
								LIES LIES LIES
							</p>
							<p className="u-marginBb">
                That's a lie - judging from the way you handle me
							</p>
							<p className="u-marginBb">
                We could have turned this city into gold
							</p>
							<p className="u-marginBm">
                Instead you're turning all my heart to stone
							</p>

							<p className="u-marginBb">
                Hold on.
							</p>
							<p className="u-marginBb">
                Don't move.
							</p>
							<p className="u-marginBb">
                Stay right there.
							</p>
							<p className="u-marginBb">
                I want to give it you
							</p>
							<p className="u-marginBm">
                Just let me stop and stare
							</p>

							<p className="u-marginBb">
                We could have turned this city into gold...
							</p>
							<p className="u-marginBm">
                Instead you're turning all my heart to stone...
							</p>

							<p className="u-marginBb">
								I gave you once last chance and you blew it...
							</p>
							<p className="u-marginBm">
								I gave you once last chance and you BLEW IT.
							</p>

							<p className="u-marginBb">
								You're putting me through it
							</p>
							<p className="u-marginBm">
                I gave you one last chance and you blew it.
							</p>

							<p className="u-marginBb">
								You're putting me through it
							</p>
							<p className="u-marginBm">
                I gave you one last chance and you blew it.
							</p>


							<p className="u-marginBb u-textBold">
								Ah...
							</p>
							<p className="u-marginBb u-textBold">
								I just want to dance by myself tonight
							</p>
							<p className="u-marginBb u-textBold">
								With all of my friends
							</p>
							<p className="u-marginBm u-textBold">
								All my crew tonight
							</p>

							<p className="u-marginBb u-textBold">
								I just want to dance by myself tonight cause
							</p>
							<p className="u-marginBb u-textBold">
								You're putting me through it
							</p>
							<p className="u-marginBm u-textBold">
								Gave you one last chance and you blew it.
							</p>

						</div>
					</main>
				</div>
			</div>
		)
	}
}

export default YouBlewIt
