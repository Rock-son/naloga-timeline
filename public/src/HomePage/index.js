import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Intro from "./components/Intro";
import FamilyCard from "./components/FamilyCard";
import NavigationBar from "./components/NavigationBar";
import { textObj0, textObj1, textObj2, textObj3, textObj4, textObj5 } from "./helpers";

import "./index.scss";

const familyArray = [textObj1, textObj2, textObj3, textObj4, textObj5];

const HomePage = props => {
	// const [activeButton, setActiveButton] = useState(0);


	return (
		<>
			<main>
				<ul className="cards">
					<Intro {...textObj0} />
					{familyArray.map(familyProps => <FamilyCard {...familyProps} />)}
				</ul>
			</main>
			<nav>
				<NavigationBar />
			</nav>
		</>
	);


}

HomePage.propTypes = {
	name: PropTypes.string
};


  export default HomePage;