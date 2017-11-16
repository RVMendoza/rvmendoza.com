import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Thaw2018 from './thaw-2018.jpg'

class Thaw extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const posts = get(this, 'props.data.allMarkdownRemark.edges')

		return (
			<div>
				<Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
				<div className="App-body u-marginBb">
					<main className="u-paddingRm">
						<h2 className="Headline Highlight u-textUppercase u-textBold u-marginBm">Thaw 2018</h2>
						<ul className="u-notFlush u-marginBm">
							<li>
								<span className="u-textBold u-textUppercase">When: </span>
								Friday, January 19th, 2018 - 9PM
							</li>
							<li>
								<span className="u-textBold u-textUppercase">Where: </span>
								El Club - 4114 Vernor Hwy, Detroit, MI 48209
							</li>
							<li>
								<span className="u-textBold u-textUppercase">Tickets: </span>
								Available soon
							</li>
						</ul>

						<p className="u-notFlush u-marginBm">
							In the winter time, people have a tendency to isolate themselves and become hardened.
						</p>

						<p className="u-notFlush u-marginBm">
							THAW is a performance and dance party. It's a wonderful night full of audio/visual performances that creates a Queer and POC centered space where people can thrive in the relentlessly bitter and unforgiving winter months.
						</p>

						<p className="u-notFlush u-marginBm">
							All are welcome to enjoy! All that's asked is that we respect each other.
						</p>

						<p className="u-notFlush u-marginBm">
							Follow <a href="https://www.instagram.com/rvxmendoza/">RV Mendoza on Instagram</a> for updates and checkout <a href="https://www.instagram.com/explore/tags/thawdetroit/">#ThawDetroit</a> to see what you're in for.
						</p>
					</main>
					<img className="u-sizeFull" src={Thaw2018}/>
				</div>
			</div>
		)
	}
}

export default Thaw