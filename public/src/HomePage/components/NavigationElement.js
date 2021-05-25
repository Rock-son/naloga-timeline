import React from 'react';

const NavigationElement = props => {
	const { description, color } = props;

	return (
		<div className="navigation__container__box">
			<button className={`navigation__container__box__button ${color}`}>

			</button>
			<div className="navigation__container__box__description">{description}</div>
		</div>
	);
}


export default NavigationElement;