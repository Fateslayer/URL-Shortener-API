// Import Packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Setup Node Environment Variables For Local Development
// require('./config');

// Initialize Express
const app = express();

// Setup View Engine
app.set('view engine', 'hbs');

// Setup CORS
app.use(cors());

// Setup Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import Routes
const root = require('./routes/root');

// Setup Routes
app.use('/', root);

// Start Server
app.listen(process.env.PORT, () => {
	console.log(`Server Started At PORT: ${process.env.PORT}`);
});
