const mongoose = require("mongoose");

async function connnection() {
  try {
    await mongoose.connect(`mongodb://localhost:27017/batch-3`); // connect returns promise
    console.log("data base connected.....");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connnection;
