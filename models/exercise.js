var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  exercise: { type: String, required: true },
  calories: { type: Number, required: true },
});

var Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
