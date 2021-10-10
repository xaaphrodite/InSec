const express = require("express");
const app = express();

const helmet = require("helmet");

app.use('/', (req, res) => {
  res.send("Information Security")
})

app.listen(3000, () => {
  console.log("Listening port 3000");
});
