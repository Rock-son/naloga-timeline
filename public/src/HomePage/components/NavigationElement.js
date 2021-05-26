import React from 'react';

const NavigationElement = props => {
	const { id, description, color, superscript, btnActiveId, btnHoveredId, toggleButton, onMouseEnter, onMouseLeave } = props;

	return (
		<div className="navigation__container__box">
			<div className={`navigation__container__box__triangle ${+btnActiveId === +id ? "active" :  ""}`}>
				<span className={`${+btnActiveId === +id ? "active" :  " "}`}></span>
			</div>
			<div className={`navigation__container__box__superscript ${+btnActiveId === +id ? "active" :  ""}`}>
				{superscript}
			</div>
			<div 
				className={`navigation__container__box__button ${color} ${+btnActiveId === +id ? "active" :  ""}`}
				onClick={toggleButton}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				id={id} 
			/>
			<div className={`navigation__container__box__description ${+btnHoveredId === +id ? "active" :  ""}`}>{description}</div>
		</div>
	);
}


export default NavigationElement;