const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.defaultController);
router.post('/todoApp', controller.todoApp);

router.get('/editTodoController/:id', controller.editTodoController);
// router.post('/updateTodo', controller.updateTodoController);

module.exports = router; 