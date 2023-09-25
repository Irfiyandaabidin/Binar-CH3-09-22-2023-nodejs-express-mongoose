const mongoose = require('mongoose')
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name tour must be filled"],
    unique: true
  },
  rating: {
    type: Number,
    default: 4,
  },
  price: {
    type: Number,
    required: [true, "Price must be filled"]
  }
})

const Tour = mongoose.model('Tour', tourSchema)

// const testTour = new Tour({
//   rating: 4.8,
//   price: 20000
// })

// testTour.save()

module.exports = Tour