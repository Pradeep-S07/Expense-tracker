const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: String,
  title: String,
  amount: Number,
  type: String,
  category: String,
  note: String,
  date: Date
});

module.exports = mongoose.model('Transaction', transactionSchema);
