// Import Packages
const url = require('url');
const express = require('express');
const Link = require('../models/Link');

// Import Express Router
const router = express.Router();

// Setup Routes

// Index Page
router.get('/', (req, res) => {
	const baseUrl = url.format({
		protocol: req.protocol,
		host: req.get('host'),
	});
	res.render('index.hbs', {
		getUrl: baseUrl + '/:code',
		getUrlExample: baseUrl + '/segEl',
		link: 'https://www.google.com',
		postUrl: baseUrl + '/',
	});
});

// Get Redirect Link From Short Code
router.get('/:code', (req, res) => {
	Link.findByCode(req.params.code).then(result => {
		if (result) {
			res.send(result);
		} else {
			res.status(404).send({});
		}
	});
});

// Create Short Link From Long Link
router.post('/', (req, res) => {
	const link = req.body.link;
	Link.createCode(link).then(result => {
		if (result) {
			res.send(result);
		} else {
			res.status(400).send({});
		}
	});
});

// Export Express Router
module.exports = router;
