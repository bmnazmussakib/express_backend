const express = require('express');
const router = express.Router();
const HelloController = require('../controllers/HelloController')
const StudentConroller = require('../controllers/StudentController')
const TokenIssuController = require('../controllers/TokenIssuController')
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware')


//  This is my first routing
router.get('/hello', HelloController.Hello)



// Mongoose CRUD operations

// JWT 
router.get('/createToken', TokenIssuController.CreateToken)
// router.get('/verifyToken', TokenIssuController.VerifyToken)


router.get('/readStudent', TokenVerifyMiddleware, StudentConroller.ReadStudents)
router.post('/insertStudent', TokenVerifyMiddleware, StudentConroller.InsertStudent)
router.put('/updateStudent/:id', TokenVerifyMiddleware, StudentConroller.UpdateStudents)
router.delete('/deleteStudent/:id', TokenVerifyMiddleware, StudentConroller.DeleteStudents)


// JWT Practice
// router.get('/createToken', StudentConroller.CreateToken)
// router.get('/verifyToken', StudentConroller.VerifyToken)











module.exports = router;