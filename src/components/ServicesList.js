import React from 'react'
import ServiceCard from "./ServiceCard.js"
import FrontEndIcon from '-!svg-react-loader?name=FrontEndDevelopment!../../static/front-end.svg';
import DiscoPopIcon from '-!svg-react-loader?name=DiscoPop!../../static/disco-pop.svg';
import ClosetIcon from '-!svg-react-loader?name=Closet!../../static/closet.svg';
import MoneyIcon from '-!svg-react-loader?name=Money!../../static/money.svg';
import EmotionalIntelligenceIcon from '-!svg-react-loader?name=EmotionalIntelligence!../../static/emotional-intelligence.svg';


class ServicesList extends React.Component {
	render() {
		return (
			<ul className="Grid Grid--withGutter Grid--equalHeight">
				<li className="Grid-cell u-md-size1of2 u-marginBm">
					<ServiceCard
						headline="Front-end Web Development"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor, ipsum sit amet pharetra semper, nibh purus posuere tellus."
						icon={[<FrontEndIcon/>]}
						toPage="front-end-development"
					/>
				</li>
				<li className="Grid-cell u-md-size1of2 u-marginBm">
					<ServiceCard
            headline="LGBTQ Experience + Activism"
						text="Lore ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor, ipsum sit amet pharetra semper, nibh purus posuere tellus."
						icon={[<ClosetIcon/>]}
						toPage="lgbtq"
					/>
				</li>
				<li className="Grid-cell u-md-size1of2 u-marginBm">
					<ServiceCard
            headline="Personal Finance + Emotional Intelligence"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor, ipsum sit amet pharetra semper, nibh purus posuere tellus."
						icon={[<MoneyIcon/>]}
					/>
				</li>
				<li className="Grid-cell u-md-size1of2 u-marginBm">
					<ServiceCard
            headline="Disco Pop Performance + Songwriting"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor, ipsum sit amet pharetra semper, nibh purus posuere tellus."
						icon={[<DiscoPopIcon/>]}
					/>
				</li>
			</ul>
		)
	}
}

export default ServicesList
