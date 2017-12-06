import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import lyricsPic from './sa-puso-mo.jpg'
import BookingImg from './booking.jpg'

class SaPusoMo extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const posts = get(this, 'props.data.allMarkdownRemark.edges')

		return (
			<div>
				<Helmet
					title="Sa Puso Mo - RV Mendoza"
				>
					<meta property="og:title" content="Sa Puso Mo - RV Mendoza" />
					<meta property="og:image" content={lyricsPic}/>
					<meta name="google" value="notranslate"/>
				</Helmet>
				<div className="App-body u-marginBb">
					<main className="u-paddingRm">
						<h2 className="Headline Highlight u-textUppercase u-textBold u-marginBb">Sa Puso Mo</h2>
						<div className="Highlight u-marginBm">
							<p>
								"I am becoming the adult I needed when I was younger. I am becoming the representation I needed, and the kindness I didn’t have. I bring that same promise as a queer Filipinx songwriter and performer. A promise to anyone that listens: if you continue to brave, you too will become the person you've always needed."
							</p>
							<p>- RV Mendoza</p>
						</div>

						<div className="Grid Grid--withGutter u-notFlush u-marginBl">
							<div className="Grid-cell u-md-size1of2">
								<iframe src="https://open.spotify.com/embed/album/7wLulbLnIZl6SKYpGtzwWE" width="100%" height="300" frameBorder="0" allowTransparency="true"></iframe>
							</div>
							<div className="Grid-cell u-md-size1of2">
								<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/334976167&amp;color=%232f3033&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" width="100%" height="300" frameBorder="0" allowTransparency="true" scrolling="no" frameBorder="no"></iframe>
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
								Saan ka pupunta? (Where are you going?)
							</p>
							<p className="u-marginBb">
								Saan ka nanggaling? (Where did you come from?)
							</p>
							<p className="u-marginBb">
								Sa puso ng kidlat (From the heart of lightning,)
							</p>
							<p className="u-marginBm">
								Doon ka tinanim (there you were planted.)
							</p>

							<p className="u-marginBb">
								Oh sige (go ahead)
							</p>
							<p className="u-marginBb">
								sige, ate (go ahead, sister)
							</p>
							<p className="u-marginBb">
								find a place where you will grow
							</p>
							<p className="u-marginBb">
								Oh sige (go ahead)
							</p>
							<p className="u-marginBb">
								sige, ate (go ahead, sister)
							</p>
							<p className="u-marginBm">
								dahan dahan lang (just take it slowly–carefully)
							</p>


							<p className="u-marginBb u-textBold">
								Bagong araw ay nandito (the new day is here)
							</p>
							<p className="u-marginBb u-textBold">
								Lakas at tapang ay handog sa 'yo (strength and bravery is my gift to you)
							</p>
							<p className="u-marginBb u-textBold">
								nandito nandito sa puso mo (it's here in your heart)
							</p>
							<p className="u-marginBb u-textBold">
								Sa puso mo (in your heart)
							</p>
							<p className="u-marginBb u-textBold">
								Sa puso mo lang (it's just there in your heart)
							</p>
							<p className="u-marginBb u-textBold">
								Sa puso mo (in your heart)
							</p>
							<p className="u-marginBm u-textBold">
								Sa puso mo lang (it's just there in your heart)
							</p>


							<p className="u-marginBb">
								Saan ka pupunta? (Where are you going?)
							</p>
							<p className="u-marginBb">
								Saan ka nanggaling? (Where did you come from?)
							</p>
							<p className="u-marginBb">
								Sa perlas ng silanganan, (at the pearl of the Orient)
							</p>
							<p className="u-marginBm">
								doon ka tinanim (there you were planted)
							</p>

							<p className="u-marginBb">
								Oh sige (go ahead)
							</p>
							<p className="u-marginBb">
								sige, ate (go ahead, sister)
							</p>
							<p className="u-marginBb">
								find a place where you will grow
							</p>
							<p className="u-marginBb">
								Oh sige (go ahead)
							</p>
							<p className="u-marginBb">
								sige, ate (go ahead, sister)
							</p>
							<p className="u-marginBm">
								dahan dahan lang (just take it slowly‚Äìcarefully)
							</p>


							<p className="u-marginBb u-textBold">
								Bagong araw ay nandito (the new day is here)
							</p>
							<p className="u-marginBb u-textBold">
								Lakas at tapang ay handog sa 'yo (strength and bravery is my gift to you)
							</p>
							<p className="u-marginBb u-textBold">
								nandito nandito sa puso mo (it's here in your heart)
							</p>
							<p className="u-marginBb u-textBold">
								Sa puso mo (in your heart)
							</p>
							<p className="u-marginBb u-textBold">
								Sa puso mo lang (it's just there in your heart)
							</p>
							<p className="u-marginBb u-textBold">
								Sa puso mo (in your heart)
							</p>
							<p className="u-marginBm u-textBold">
								Sa puso mo lang (it's just there in your heart)
							</p>

							<p className="u-marginBb">
								Hala...ulan (oh! rain!)
							</p>
							<p className="u-marginBb">
								Hindi ko kayang ihinto ang pag-ulan (I can't stop the rain)
							</p>
							<p className="u-marginBb">
								pero sa ayaw at gusto mo (but whether you like it or not)
							</p>
							<p className="u-marginBm">
								ma mumulaklak ang puso mo (you heart will bloom)
							</p>

							<p className="u-marginBb">
								How can I stop the rain from falling?
							</p>
							<p className="u-marginBb">
								How can I stop the rain from falling down?
							</p>
							<p className="u-marginBb">
								Unless there’s a way to unbreak me,
							</p>
							<p className="u-marginBl">
								I bear the weight of a hundred thousand vows.
							</p>
						</div>
					</main>
				</div>
			</div>
		)
	}
}

export default SaPusoMo