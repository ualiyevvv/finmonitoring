const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		minLength: 11,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	phone: {
		// регистрация по номеру телефона должна быть.
		type: String,
		unique: true,
		required: true,
	},

	role: {
		type: String,
		enum: ['admin', 'investigator', 'viewer', 'caseAssigner', 'caseCloser', 'caseNoteTaker'],
		default: 'viewer',
	},

	status: {
		type: String,
		enum: ['banned', 'active', 'waiting']
	},
	ban_reasons: {
		type: String,
	},

	createdDate: {
		type: Date,
		immutable: true,
		default: () => new Date(),
	},
	updatedDate: {
		type: Date,
		default: () => new Date(),
	}
});

UserSchema.plugin(require('mongoose-unique-validator'));
UserSchema.plugin(require('../updatedDate'))
UserSchema.plugin(require('../logPlugin'));

UserSchema.plugin(require('../../websocket/observer/user'));

const handlers = require('../handlers');

UserSchema.methods.onCreate = async function({body, user}){}

UserSchema.methods.deepDelete = async function (){
	await this.delete();
	return this;
}

module.exports = model('User', UserSchema);
