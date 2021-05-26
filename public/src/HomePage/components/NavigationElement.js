import React from 'react';

const NavigationElement = props => {
	const { id, description, color, superText, onClick, btnActiveId } = props;

	return (
		<div className="navigation__container__box">
			<div id={id} className={`navigation__container__box__button ${color} ${+btnActiveId === +id ? "active" :  ""}`} onClick={onClick} />
			<div className="navigation__container__box__description">{description}</div>
		</div>
	);
}


export default NavigationElement;