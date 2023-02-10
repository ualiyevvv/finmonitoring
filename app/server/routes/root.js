const express = require('express');
const path = require('path');

const Router = express.Router();

router.get('/by/:id', dataController.getOne);
router.get('/between', dataController.between);
router.get('/relations', dataController.getRelations);
router.get('/viewappp', dataController.viewappp);
router.get('/all', dataController.getAll);

/*Router.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../../build-frontend/index.html'));
});*/

Router.use((err, req, res, next)=>{
	res.json({message: err});
});

module.exports = Router;