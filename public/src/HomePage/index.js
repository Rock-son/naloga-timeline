import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Intro from "./components/Intro";
import FamilyCard from "./components/FamilyCard";
import NavigationBar from "./components/NavigationBar";
import { textObj0, textObj1, textObj2, textObj3, textObj4, textObj5 } from "./helpers";

import "./index.scss";

const familyArray = [textObj1, textObj2, textObj3, textObj4, textObj5];

const HomePage = props => {
	const [navigationCoordinates, setNavigationCoordinates] = useState(0);
	const [btnActiveId, setBtnActiveId] = useState(0);

	const toggleButton = e => {
		const targetId = e.currentTarget.id || 0;
		setBtnActiveId(btnActiveId === targetId ? 0 : targetId );
		setNavigationCoordinates(+targetId);
	}

	return (
		<>
			<main>
				<ul className={`cards card-${navigationCoordinates}`}>
					<Intro {...textObj0} />
					{familyArray.map(familyProps => <FamilyCard key={familyProps.description} toggleButton={toggleButton} {...familyProps} />)}
				</ul>
			</main>
			<nav>
				<NavigationBar 
					btnActiveId={btnActiveId}
					toggleButton={toggleButton}
				/>
			</nav>
		</>
	);
}

HomePage.propTypes = {
	name: PropTypes.string
};


  export default HomePage;