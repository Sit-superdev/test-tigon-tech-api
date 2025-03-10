const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', controllers.welcomeController.getHomePage);
router.get('/api', controllers.listAllApiController.getAllApis);
router.get('/test-pusher', controllers.listAllApiController.testPusher);

router.post('/spin-wheel', controllers.spinnerController.spinWheel);
router.post('/add-people', controllers.spinnerController.addPeople);
router.post('/add-reward', controllers.spinnerController.addReward);
router.post('/remove-people', controllers.spinnerController.removePeople);
router.post('/remove-reward', controllers.spinnerController.removeReward);
router.patch('/update-people', controllers.spinnerController.updatePeople);

    module.exports = router; 