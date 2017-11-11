import React from 'react'
import Link from 'gatsby-link'


class ServiceCard extends React.Component {

	render() {

		const { headline, text, icon, toPage } = this.props


		return (
			<section className="ServiceCard u-flex u-flexCol u-flexJustifyBetween u-paddingAb">
				<header className="u-flex u-flexJustifyBetween u-flexAlignItemsTop u-marginBs">
					<h1 className="ServiceCard-headline u-marginRb">
						{headline}
					</h1>
          <div className="Icon">
						{icon}
					</div>
				</header>
				<main>
					<p className="ServiceCard-text u-marginBs">
						{text}
					</p>
					<div className="u-flex u-flexJustifyEnd">
						<Link className="Button" to={"/" + toPage}>
							Learn More
						</Link>
					</div>
				</main>

			</section>
		)
	}
}

export default ServiceCard
