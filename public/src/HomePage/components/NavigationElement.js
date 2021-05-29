import React from 'react';

const NavigationElement = props => {
	const { id, description, color, length: { nrOfButtons, currentIndex}, superscript, btnActiveId, btnHoveredId, toggleButton, onMouseEnter, onMouseLeave } = props;

	return (
		<div className="navigation__container__box">
			<div className={`navigation__container__box__pointer-container ${+btnActiveId === +id ? "active" :  ""}`} >
				<div className={`navigation__container__box__pointer-container__triangle ${+btnActiveId === +id ? "active" :  ""}`} />
				<div className={`navigation__container__box__pointer-container__superscript ${+btnActiveId === +id ? "active" :  ""}`} >
					{superscript}
				</div>
			</div>
			<div 
				className={`navigation__container__box__button ${color} ${+btnActiveId === +id ? "active" :  ""}`}
				onClick={toggleButton}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				id={id} 
			/>
			<div className={`navigation__container__box__description ${+btnHoveredId === +id ? "active" :  ""}`}>{description}</div>
			{ nrOfButtons > currentIndex + 1 ? <hr className="navigation__container__box__line" /> : ""}
		</div>
	);
}


export default NavigationElement;