const moongose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Ad = new moongose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

Ad.plugin(mongoosePaginate)

module.exports = moongose.model('Ad', Ad)
