const express = require("express");
const app = express();
const port = 3000;

app.route("/", (request, result) => {
  result.send("Hello World");
});

app.listen(port, () => {
  console.log("Listening on http://localhost:" + port + "/");
});
