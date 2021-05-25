import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FirstFamily from "./components/FirstPage";
import NavigationBar from "./components/NavigationBar";

import "./index.scss";

const HomePage = props => {
	// const [activeButton, setActiveButton] = useState(0);


	return (
		<>
			<main>
				<article className="card">
					<FirstFamily />
				</article>
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