const {Router} = require('express')
const router = Router()
const dataController = require('../controllers/dataController')


router.get('/by/:id', dataController.getOne);
router.get('/between', dataController.between);
router.get('/bynode', dataController.bynode);
router.get('/relations', dataController.getRelations);
router.get('/viewappp', dataController.viewappp);
router.get('/all', dataController.getAll);

module.exports = router