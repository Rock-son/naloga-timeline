import React, { useState } from 'react';

import NavigationElement from "./NavigationElement";
import { familiesNavigation } from "../helpers";



const NavigationBar = props => {


	return (
		<div className="navigation__container">
			{ familiesNavigation.map(obj => {
				
					return (
						<NavigationElement
							key={obj.color}
							description={obj.description}
							color={obj.color}
							superText={obj.superText}
						/>
					);
				})
			}
		</div>
	);
}


export default NavigationBar;