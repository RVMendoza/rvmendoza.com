import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import SaPusoMoPic from './sa-puso-mo.jpg'

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
					<meta property="og:image" content={SaPusoMoPic}/>
					<meta name="google" value="notranslate"/>
				</Helmet>
				<div className="App-body u-marginBb">
					<main className="u-paddingRm">
						<h2 className="Headline Highlight u-textUppercase u-textBold u-marginBm">Sa Puso Mo</h2>
            <div className="u-notFlush u-marginBl">
							<iframe src="https://open.spotify.com/embed/album/7wLulbLnIZl6SKYpGtzwWE" width="100%" height="80" frameBorder="0" allowTransparency="true"></iframe>
						</div>

					<img className="u-size1of2 u-notFlush u-marginBm" src={SaPusoMoPic}/>
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