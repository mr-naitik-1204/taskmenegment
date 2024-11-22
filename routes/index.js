var express = require('express');
var router = express.Router();
const TM = require('../controller/Taskmen')

router.post('/createTask', TM.createTask);
router.get('/getTasks', TM.getTasks);
router.get('/getTaskById/:id', TM.getTaskById);
router.put('/updateTask/:id', TM.updateTask);

module.exports = router;
