const express = require('express');
const passport = require('passport');


const Router = express.Router();


Router.get('/', (req, res)=>{
	res.sendFile(require.main.path + '/view/auth/login.html');
});

Router.post('/', passport.authenticate('local', {failureMessage: true}), (req, res)=>{
    // console.log(req.user);
	const user = req.user
	res.json({
		id: user.id,
		name: user.name,
		email: user.email,
		phone: user.phone,
		role: user.role,
		status: user.status,
		ban_reasons: user.ban_reasons,
	});
});

module.exports = Router;
