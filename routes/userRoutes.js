const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//applydoctor|| POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);
//Notification || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notification || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

// GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);
// book appointment
router.post("/book-appointment", authMiddleware, bookAppointmentController);
//
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);
//Appointments list
router.get('/user-appointments',authMiddleware,userAppointmentsController)
module.exports = router;
