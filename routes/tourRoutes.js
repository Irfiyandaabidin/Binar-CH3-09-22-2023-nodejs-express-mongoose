const express = require("express")
const tourController = require('../controllers/toursController')

const router = express.Router()

// router.param('id', tourController.checkId)

// ROUTES UNTUK TOUERS
router
  .route("/")
  .get(tourController.getAllToursModels)
  .post(
    // tourController.checkBody,
    tourController.createTourModel
    )

router
  .route("/:id")
  .get(tourController.getTourByIdModel)
  .patch(tourController.editTour)
  .delete(tourController.removeTour)

module.exports = router
