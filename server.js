// =============================================================================
// Dependencies
// =============================================================================
var express = require("express");
var bodyParser = require("body-parser");

var db = require("./models");

var PORT = process.env.PORT || 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static Directory
app.use(express.static("./public"));

// Routes
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function(){
        console.log("Listening on port %s", PORT);
    });
});
