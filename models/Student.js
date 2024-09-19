const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  // schema= structure of table
  rollNo: { type: String }, // fields
  name: { type: String }, // fields
  fatherName: { type: String }, // fields
  aadharCardNo: { type: String }, // fields
  mobileNo: { type: String }, // fields
});

module.exports = mongoose.model("Student", StudentSchema);
