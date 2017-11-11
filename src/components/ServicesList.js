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
						text="Get clean, responsive, modular, and future-friendly web components. Good user interface code is not important just for the sake of being good, but to enact generosity and accessibility to the user. Project management ready, and specializes in maintainable HTML, CSS, and enough ReactJS to be dangerous."
						icon={[<FrontEndIcon/>]}
						toPage="front-end-development"
					/>
				</li>
				<li className="Grid-cell u-md-size1of2 u-marginBm">
					<ServiceCard
            headline="LGBTQ Experience + Intersectional Activism"
						text="I have become the person I needed when I was younger. I bring that same promise to people all around the world by sharing my experience as a queer Filipino immigrant. Speaking engagements, personal coaching, and writing."
						icon={[<ClosetIcon/>]}
						toPage="lgbtq"
					/>
				</li>
				<li className="Grid-cell u-md-size1of2 u-marginBm">
					<ServiceCard
            headline="Personal Finance + Emotional Intelligence"
						text="Money is just paper. It has no power. *People* put the power in money, and people bring with them emotions and trauma. Most money problems are not about money itself but something deeper hidden in our emotions. I will help you examine those feelings help you make money decisions from a place of power instead of fear."
						icon={[<MoneyIcon/>]}
					/>
				</li>
				<li className="Grid-cell u-md-size1of2 u-marginBm">
					<ServiceCard
            headline="Disco Pop Performance + Songwriting"
						text="I’m ready to turn it out for you with my experience at Pride Festivals and conferences nationally and internationally. My performances are queer, danceable, and cultural (Filipino). If you’re a fellow artist, let’s collaborate and write catchy pop music together!"
						icon={[<DiscoPopIcon/>]}
					/>
				</li>
			</ul>
		)
	}
}

export default ServicesList
