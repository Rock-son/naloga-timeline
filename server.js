const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const serveStatic = require('serve-static');
const favicon = require('serve-favicon');
// EXPRESS LIMITER
const RateLimiter = require("express-rate-limit");
// SECURITY
const helmet = require("./helmet.js");

const app = express();

const limiter = new RateLimiter({
	windowMs: 10 * 60 * 1000, // 15 minutes
	max: 10000, // limit each IP to 200 requests per windowMs (fonts, jpeg, css)
	delayMs: 0 // disable delaying - full speed until the max limit is reached
});

// SECURITY
helmet(app);

// LIMITER & 
app.use(limiter);

// SET SETTINGS
app.set("env", "production");
// ROUTES
app.use(serveStatic(path.join(__dirname, "./public/build/"), { index: false }));
app.use(favicon(path.join(__dirname, './public/build/', 'favicon.ico')));
// BODY PARSERS
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* TODO: CSP VIOLATION LOGGER */
app.post("/report-violation",
	bodyParser.json({
		type: ["json", "application/json"]
	}),

	(req, res) => {
	if (req.body) {
		console.log('csp violation: ', req.body)
	} else {
		console.log('csp violation: no data received!')
	}
	res.status(204).end()
});



// CHECK AUTHORIZATION
app.get("*", (req, res, next) => {
	res.sendFile(path.join(__dirname, "./public/build", "index.html"));
});

module.exports = app;