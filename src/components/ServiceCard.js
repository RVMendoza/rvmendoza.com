import React from 'react'
import FrontEndIcon from '-!svg-react-loader?name=Icon!../../static/front-end.svg';
import Link from 'gatsby-link'


class ServiceCard extends React.Component {

	render() {

		const { headline, text } = this.props

		return (
			<section className="ServiceCard u-paddingAb">
				<header className="u-flex u-flexJustifyBetween u-flexAlignItemsTop">
					<h1 className="ServiceCard-headline">
						{headline}
					</h1>
          <div className="Icon">
						<FrontEndIcon />
					</div>
				</header>
				<p className="ServiceCard-text">
					{text}
				</p>
				<Link to="/front-end-developer">
					Learn More
				</Link>

			</section>
		)
	}
}

export default ServiceCard
