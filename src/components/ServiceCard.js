import React from 'react'


class ServiceCard extends React.Component {

	render() {

		const { headline, text } = this.props

		return (
			<section className="ServiceCard u-paddingAb">
				<h1 className="ServiceCard-headline">
					{headline}
				</h1>
				<p className="ServiceCard-text">
					{text}
				</p>
			</section>
		)
	}
}

export default ServiceCard
