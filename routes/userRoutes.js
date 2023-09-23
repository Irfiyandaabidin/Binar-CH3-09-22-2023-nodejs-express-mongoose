const express = require("express")
const userController = require('../controllers/userController')

const router = express.Router()

// ROUTES UNTUK USERS
router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser)

router
  .route("/:id")
  .get(userController.getUserById)
  .patch(userController.editUser)
  .delete(userController.removeUser)

module.exports = router
