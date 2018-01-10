import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import lyricsPic from './say-it.jpg'
import BookingImg from './booking.jpg'


class SayIt extends React.Component {
	render() {
		const siteTitle = "Say It- RV Mendoza"
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
						<h2 className="Headline Highlight u-textUppercase u-textBold u-marginBb">Say It</h2>
						<div className="Highlight u-marginBm">
							<p>
								"I am becoming the adult I needed when I was younger. I am becoming the representation I needed, and the kindness I didn’t have. I bring that same promise as a queer Filipinx songwriter and performer. A promise to anyone that listens: if you continue to brave, you too will become the person you've always needed."
							</p>
							<p>- RV Mendoza</p>
						</div>
						<div className="Grid Grid--withGutter u-notFlush u-marginBl">
							<div className="Grid-cell u-md-size1of2">
								<iframe src="https://open.spotify.com/embed/track/4mdqVb9ZjN3vnXVm3tVhjP" width="100%" height="300" frameBorder="0" allowTransparency="true"></iframe>
							</div>
							<div className="Grid-cell u-md-size1of2">
								<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/168240874&amp;color=%232f3033&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" width="100%" height="300" frameBorder="0" allowTransparency="true" scrolling="no" frameBorder="no"></iframe>
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
							<iframe width="100%" height="315" src="https://www.youtube.com/embed/d471iRlWYyA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>

            <div className="u-notFlush">
							<p className="u-marginBb">
								You're all I've ever wanted
							</p>
							<p className="u-marginBb">
								My heart and brain haven't caught up yet
							</p>
							<p className="u-marginBb">
								and I want you to have them
							</p>
							<p className="u-marginBm">
								so stay and say it
							</p>

							<p className="u-marginBb u-textBold">
								I wanna hear you say:
							</p>
							<p className="u-marginBb u-textBold">
								I want you, I need you
							</p>
							<p className="u-marginBb u-textBold">
								I wanna hear my name
							</p>
							<p className="u-marginBb u-textBold">
                in your dreams–cause you're sleep talking
							</p>
							<p className="u-marginBb u-textBold">
                can't get you out of my head
							</p>
							<p className="u-marginBb u-textBold">
                I don't want to. You know that I'm into you?
							</p>
							<p className="u-marginBm u-textBold">
                So stay and say it
							</p>

							<p className="u-marginBb">
								You know I'm not that kind to be so coy
							</p>
							<p className="u-marginBb">
								and you know you're no obliged to call me your boy
							</p>
							<p className="u-marginBb">
								but first, I want to hear you–I don't believe you
							</p>
							<p className="u-marginBb">
								when everything you say has a shield
							</p>
							<p className="u-marginBb">
								I should have been over this, but I'm not over it
							</p>
							<p className="u-marginBm">
								Won't you please just say what's real?
							</p>

							<p className="u-marginBb u-textBold">
								I wanna hear you say:
							</p>
							<p className="u-marginBb u-textBold">
								I want you, I need you
							</p>
							<p className="u-marginBb u-textBold">
								I wanna hear my name
							</p>
							<p className="u-marginBb u-textBold">
								in your dreams‚ cause you're sleep talking
							</p>
							<p className="u-marginBb u-textBold">
								can't get you out of my head
							</p>
							<p className="u-marginBb u-textBold">
								I don't want to. You know that I'm into you?
							</p>
							<p className="u-marginBm u-textBold">
								So stay and say it
							</p>

							<p className="u-marginBb">
								You're more than anything that I've dreamed of
							</p>
							<p className="u-marginBb">
								Gave up my everything to call your bluff
							</p>
							<p className="u-marginBb">
								I've good intentions–I've paid attention
							</p>
							<p className="u-marginBm">
								and your love is sure enough
							</p>

							<p className="u-marginBb u-textBold">
								I wanna hear you say:
							</p>
							<p className="u-marginBb u-textBold">
								I want you, I need you
							</p>
							<p className="u-marginBb u-textBold">
								I wanna hear my name
							</p>
							<p className="u-marginBb u-textBold">
								in your dreams‚ when you're sleep talking
							</p>
							<p className="u-marginBm u-textBold">
								So stay and say it
							</p>


						</div>
					</main>
				</div>
			</div>
		)
	}
}

export default SayIt
