var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://<user1>:<password1>@ds163757.mlab.com:63757/heroku_5ww5mg8x",
  { useNewUrlParser: true,
    useUnifiedTopology: true }
);

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
