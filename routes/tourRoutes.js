const express = require("express")
const tourController = require('../controllers/toursController')

const router = express.Router()

router.param('id', tourController.checkId)

// ROUTES UNTUK TOUERS
router
  .route("/")
  .get(tourController.getAllTours)
  .post(
    tourController.checkBody,
    tourController.createTour
    )

router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.editTour)
  .delete(tourController.removeTour)

module.exports = router
