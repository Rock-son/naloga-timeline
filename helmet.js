"use strict";

const helmet = require("helmet");
const cors = require("cors");

module.exports = function a(app) {
	app.use(helmet.hidePoweredBy({
		setTo: 'PHP 7.2.0'
	}));
	app.use(helmet.contentSecurityPolicy({
		useDefaults: true,
		directives: {
			"defaultSrc": 	[ "'self'" ],
			"connectSrc":	[ "'self'", "https://www.google-analytics.com/", "http://localhost:5000" ],
			"scriptSrc": 	[ "'self'", "https://storage.googleapis.com", "https://polyfill.io"],
			"styleSrc": 	[ "'self'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com" ],
			"fontSrc": 		[ "'self'" , "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com" ],
			"imgSrc":	    [ "'self'", "data:", "https://loremflickr.com/" ],
			"objectSrc": 	[ "'none'"],
			"sandbox":		[ "allow-modals", "allow-forms", "allow-scripts", "allow-same-origin", "allow-popups" ],
			"reportUri": 	'/report-violation',
			"upgradeInsecureRequests": [true]
		},
		// set up a POST route for notifying / logging data to server
		// "reportOnly=true" - policy will not be enforced
		reportOnly: false
	}));

	const corsOptions = {
		origin: "https://naloga-timeline.herokuapp.com",
		optionsSuccessStatus: 200
	};
	app.use(cors());
	/*
	app.use((req, res, next) => {
		res.set({
			"Access-Control-Allow-Origin": "<origin>",
			"Vary": "Origin"
		});
		next();
	});
	*/
};