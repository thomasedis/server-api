const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  image: { type: String, required: true },
  content: { type: String, required: true },
  auther: { type: String, required: true },
  subContent: { type: String, required: true },
  createdAt: { type: Date, required: false },
}, {
  timestamps: true,
});



const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;