import * as React from 'react';

import Nav from '../../../components/shared/nav/index';
import Header from '../../../components/shared/header/section';
import Section from '../../../components/shared/content/section';
import Footer from '../../../components/shared/footer/index';
import CookieWarning from '../../../components/shared/cookie-warning';

class Apply extends React.Component {
	render() {
		const cta = (
			<a
				className="u-button header-section__content__call-to-action"
				href="/apply"
			>
				Find your solution
			</a>
		);

		return (
			<React.Fragment>
				<CookieWarning />
				<Nav />

				<Header
					image="/assets/challenges/mobility/header-mobility.jpg"
					description="How might we provide more efficient, sustainable, and safer means of transport?"
					cta={cta}
					overlayColor="rgba(5, 16, 72, 0.56)"
				>
					Revolutionize the mobility sector
				</Header>

				<Section title="Mobility is changing">
					<p className="u-text">The mobility sector is changing rapidly. Already, cars run on electricity or fuel cells. More engineers work on the car’s software than on its engine. And, in the future, many more cars and trucks will steer themselves through the traffic.</p>

					<p className="u-text">Start-ups are developing drones that will open up new possibilities for travel. People use e-bikes, cargo-bikes, and e-scooters. Companies are offering company bikes and mobility credits to their employees. New apps are emerging to find the best way to move from A to B through a variety of transport and travel operators.</p>

					<p className="u-text">How can a company keep up with these challenges? Or rather, how can it set the next trend and lead the development?</p>
				</Section>

				<Footer addSectionClass="u-section-margin-top" />
			</React.Fragment>
		);
	}
}

export default Apply;
