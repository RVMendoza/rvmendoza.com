import React from 'react'
import ServiceCard from "./ServiceCard.js"


class ServicesList extends React.Component {
	render() {
		return (
			<ul className="Grid Grid--withGutter">
				<li className="Grid-cell u-md-size1of2">
					<ServiceCard
            headline="Front-end Web Development"
						text="Service One"
					/>
				</li>
				<li className="Grid-cell u-md-size1of2">
					hi2
				</li>
			</ul>
		)
	}
}

export default ServicesList
