import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import BookingImg from './booking.jpg'

class Music extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const posts = get(this, 'props.data.allMarkdownRemark.edges')

		return (
			<div>
				<Helmet
					title="RV Mendoza - Queer Filipino Disco Pop Performer and Songwriter"
				>
					<meta property="og:title" content="RV Mendoza - Queer Filipino Disco Pop Performer and Songwriter" />
					<meta property="og:image" content={BookingImg} />
					<meta name="google" value="notranslate" />
				</Helmet>
				<div className="App-body u-marginBb">
					<main className="u-paddingRm">
						<h2 className="Highlight u-textUppercase u-textBold u-marginBs">Queer Filipinx Disco Pop Performer and Songwriter</h2>
						<p className="u-notFlush">
							RV Mendoza is a queer Filipinx disco pop songwriter and performer from Detroit, Michigan.
						</p>
						<p className="u-notFlush u-marginBm">
							He contributes to conversations involving sexuality, gender, emotional intelligence, and immigrant diasporic experiences.
						</p>

						<div className="u-notFlush u-marginBm u-textBold">
							Contact <a href="mailto:tony.e.lowe@gmail.com">Tony Lowe</a> for 2018 booking.
						</div>
						<div className="u-notFlush u-marginBm">
							<a href="https://www.instagram.com/rvxmendoza/">Instagram</a>
							<span className="u-marginHb">|</span>
							<a href="https://www.facebook.com/RVxMendoza/">Facebook</a>
							<span className="u-marginHb">|</span>
							<a href="http://youtube.com/rvmendoza/">Youtube</a>
						</div>
						<div className="u-notFlush u-sizeFull">
							<iframe width="100%" height="315" src="https://www.youtube.com/embed/ETsaCfFaSRo?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>

						<img className="u-sizeFull u-notFlush u-marginBm" src={BookingImg} />
						<div className="Highlight u-marginBm">
							<p>
								"I am becoming the adult I needed when I was younger.
								I am becoming represenation I didn't have, and the kindness I needed.
								I bring that same promise as a songwriter and performer.
								A promise to anyone that listens‚ that if you continue to brave, you too will become the person you've always needed."
							</p>
							<p>– RV Mendoza</p>
						</div>
						<div className="Grid Grid--withGutter u-notFlush u-marginBl">
							<div className="Grid-cell u-md-size1of2">
								<iframe src="https://open.spotify.com/embed/artist/0YVK604Puec6VbHp2x59Il" width="100%" height="300" frameBorder="0" allowTransparency="true"></iframe>
							</div>
							<div className="Grid-cell u-md-size1of2">
								<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/266790279&amp;color=%232f3033&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" width="100%" height="300" frameBorder="0" allowTransparency="true" scrolling="no" framborder="no"></iframe>
							</div>
						</div>

						<div className="u-notFlush u-marginBl">
							<iframe width="100%" height="315" src="https://www.youtube.com/embed/eeDG5Dz-WPw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
							<iframe width="100%" height="315" src="https://www.youtube.com/embed/IwW6Cklqi1E?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
							<iframe width="100%" height="315" src="https://www.youtube.com/embed/pxQ4_dOqK5s?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
							<iframe width="100%" height="315" src="https://www.youtube.com/embed/OXi2AhlBfRk?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
						</div>

						<div className="u-notFlush u-marginBm u-textBold">
							Contact <a href="mailto:tony.e.lowe@gmail.com">Tony Lowe</a> for 2018 booking.
						</div>

						<h3 className="Highlight u-textBold u-marginBm">
							Press and Involvement
						</h3>

						<ol className="u-notFlush">
							<li className="u-marginBm">
								<h4 className="u-textBold">
									<a href="http://pineapplelab.ph/categories_programs/artists-in-residence/">
										Pinapple Lab Artist in Residence
									</a>
								</h4>
								<p>
                  - Artist in Residence exploring performance and music
								</p>
								<p>
                  - Researched and integrated Filipinx Futurism in modern pop music
								</p>
								<p>
                  - Collaborated with fellow queer Filipinx artists and performers
								</p>
							</li>
							<li className="u-marginBm">
								<h4 className="u-textBold">
									<a href="http://www.fringemanila.com/">
										Pinapple Lab Artist in Residence
									</a>
								</h4>
								<p>
                  - Performer and producer of open access arts festival
								</p>
								<p>
									- Performed with in Manila “Gaybhorhood” events sponsored by TEAM Mag (Philippines LGBTQ+ Magazine), and DULO
								</p>
								<p>
									- Presented music and performance templates from Detroit
								</p>
							</li>
							<li className="u-marginBm">
								<h4 className="u-textBold">
									<a href="http://rvmendoza.com/thaw/">
										THAW 2018
									</a>
								</h4>
								<p>
									- Organized, produced, and headlined a show focusing on LGBTQ+ POC
								</p>
								<p>
									- Collaborated with local Detroit talent Tim Schumack and Superwickedcool
								</p>
							</li>
							<li className="u-marginBm">
								<h4 className="u-textBold">
									<a href="https://www.youtube.com/watch?v=rWUsG8sU4y0">
										Songwriting placement on MTV's Teen Wolf
									</a>
								</h4>
								<p>
									- Co-wrote "Find What You're Looking For" with Flint Eastwood and producer Seth Anderson.
								</p>
								<p>
									- Premiered in key moment on Season 6, Episode 2 of MTV's hit show Teen Wolf
								</p>
								<p>
									- Song placements in game documentaries and Ford commercials.
								</p>
							</li>
							<li className="u-marginBm">
								<h4 className="u-textBold">
									<a href="http://filipino.kitchen/kultura-festival/">
										3rd Annual Kultural Chicago Festival
									</a>
								</h4>
								<p>
                  - Featured Filipinx performer at Emporium Lounge
								</p>
								<p>
									- Supported Filipino Kitchen in honoring Filipino culture through music and dance
								</p>
							</li>		<li className="u-marginBm">
								<h4 className="u-textBold">
									<a href="https://www.instagram.com/p/BZEia3Bgfy_/">
										Performer for DACA Fundraiser - Benefit Concert US Immigrants
									</a>
								</h4>
								<p>
									- Collaborated with local and international performing artists Tunde Olaniran, Bevlove and DJ StaceyeJ to raise funds for DACA Renewal Fees
								</p>
							</li>
							<li className="u-marginBm">
								<h4 className="u-textBold">
									<a href="http://en.calameo.com/read/001556018012ee527a09d">
										Cover of Flame Magazine
									</a>
								</h4>
								<p>
									- Michigan's Premier LGBT Lifestyle & Entertainment Magazine, covering the lesbian, gay, bisexual, and transgender community from Detroit since 2012.
								</p>
								<p>
									- Shared his experience on his Filipinx Queer Identity, and desireability in being fat in the gay community.
								</p>
							</li>
							<li className="u-marginBm">
								<h4 className="u-textBold">
									<a href="http://www.kultura.ca/">
										Kultura Festival Toronto - HATAW Dance Troupe
									</a>
								</h4>
								<p>
									- Broke gender binaries while honoring traditional Filipinx cultural performance. Featured in Filipinx Futurism dance piece involving sinkil fan spinning.
								</p>
								<p>
									- International premiere of song "Sa Puso Mo", a bilingual tagalog/english song about Filipinx diaspora.
								</p>
							</li>
							<li className="u-marginBm">
								<h4 className="u-textBold">
									<a href="http://filipino.kitchen/kultura-festival/">
									  Kultura Festival Chicago
									</a>
								</h4>
								<p>
									- National Premiere of song "Sa Puso Mo", a bilingual tagalog/english song about Filipinx diaspora.
								</p>
							</li>
							<li className="u-marginBm">
								<h4 className="u-textBold">
									<a href="https://www.newsy.com/stories/filipinos-our-food-is-more-than-a-trend/">
										NEWSY: Filipinos Want You To Know Their Food Is More Than A Trend
									</a>
								</h4>
								<p>
									- "Some Filipino-Americans are attempting to facilitate conversations about their cultural dishes as they become more popular with a broader audience."
								</p>
							</li>
						</ol>
						<div className="u-notFlush u-marginBm u-textBold">
							Contact <a href="mailto:tony.e.lowe@gmail.com">Tony Lowe</a> for 2018 booking.
						</div>
					</main>
				</div>
			</div>
		)
	}
}

export default Music