import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class Thaw extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const posts = get(this, 'props.data.allMarkdownRemark.edges')

		return (
			<div>
				<Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
				<div className="App-body u-marginBg">
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

					<p className="u-notFlush u-marginBg">
						Follow <a href="https://www.instagram.com/rvxmendoza/">RV Mendoza on Instagram</a> for updates and checkout <a href="https://www.instagram.com/explore/tags/thawdetroit/">#ThawDetroit</a> to see what you're in for.
					</p>

					<img className="u-sizeFull" src="thaw-2018.jpg" />
				</div>
				{/*
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <div key={post.node.frontmatter.path}>
                <h3>
                  <Link to={post.node.frontmatter.path} >
                    {post.node.frontmatter.title}
                  </Link>
                </h3>
                <small>{post.node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </div>
            )
          }
				})}
			*/}
			</div>
		)
	}
}

export default Thaw