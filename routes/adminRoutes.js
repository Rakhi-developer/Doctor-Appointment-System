const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET METHODS ||User
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//get methods||doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);
//POST  ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);
module.exports = router;
