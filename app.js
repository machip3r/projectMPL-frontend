const express = require("express");
//const path = require("path");
const app = express();
const port = 3000;

//app.use(express.static(__dirname + "/public"));
//app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (request, result) => {
  result.render("index", {title: "Index Template"});
});

/* app.route("/test", (request, result) => {
  result.sendFile(__dirname + "/public/");
}); */

app.listen(port, () => {
  console.log("Listening on http://localhost:" + port + "/");
});
