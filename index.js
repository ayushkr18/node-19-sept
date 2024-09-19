const express = require("express");
let connnection = require("./connection");
const student = require("./routes/student");
const app = express();
connnection();
app.use(student);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running on 6000");
  }
});

//localhost:6000/add/student
