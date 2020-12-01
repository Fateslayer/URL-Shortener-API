// Import Mongoose
const mongoose = require('mongoose');

// Connect Mongoose To Database
mongoose
	.connect(
		process.env.DB_URL,
		{
			useNewUrlParser: true,
		}
	)
	.then(() => {
		console.log('Database Connected');
	});

// Export Mongoose
module.exports = mongoose;
