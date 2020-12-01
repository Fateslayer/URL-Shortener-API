// Import Mongoose
const mongoose = require('../database/mongoose');

// Import Random String Package
const randomstring = require('randomstring');

// Import URL Validator
const isURL = require('validator/lib/isURL');

// Setup Link Schema
const linkSchema = mongoose.Schema(
	{
		code: {
			type: String,
			trim: true,
			unique: true,
			required: true,
			minlength: [5, 'Code Length Must Be 5'],
			maxlength: [5, 'Code Length Must Be 5'],
		},
		link: {
			type: String,
			trim: true,
			unique: true,
			required: true,
			validate: {
				validator: isURL,
			},
		},
	},
	{
		toJSON: {
			transform: function(doc, ret) {
				delete ret._id;
				delete ret.__v;
			},
		},
	}
);

// Static Methods
linkSchema.statics.findByCode = function(code) {
	return Link.findOne({ code });
};

linkSchema.statics.findByLink = function(link) {
	return Link.findOne({ link });
};

linkSchema.statics.createCode = function(link) {
	return Link.findByLink(link).then(result => {
		if (result) {
			return result;
		} else {
			const newLink = new Link({
				code: randomstring.generate(5),
				link,
			});
			return newLink.save();
		}
	});
};

// Create Link Model
const Link = mongoose.model('Link', linkSchema);

// Export Link Model
module.exports = Link;
