const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', controllers.welcomeController.getHomePage);
router.get('/api', controllers.listAllApiController.getAllApis);

router.post('/spin-wheel', controllers.spinnerController.spinWheel);
router.post('/add-people', controllers.spinnerController.addPeople);
router.post('/add-reward', controllers.spinnerController.addReward);
router.post('/remove-people', controllers.spinnerController.removePeople);
router.patch('/update-people', controllers.spinnerController.updatePeople);

module.exports = router; 