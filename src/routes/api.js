const express = require('express');
const router = express.Router();
const HelloController = require('../controllers/HelloController')
const StudentConroller = require('../controllers/StudentController')


//  This is my first routing
router.get('/hello', HelloController.Hello)



// Mongoose CRUD operations
router.get('/readStudent', StudentConroller.ReadStudents)
router.post('/insertStudent', StudentConroller.InsertStudent)
router.put('/updateStudent/:id', StudentConroller.UpdateStudents)
router.delete('/deleteStudent/:id', StudentConroller.DeleteStudents)







module.exports = router;