// DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");


// EXPRESS SET UP
const app = express();
const PORT = process.env.PORT || 3000

// EXPRESS DATA PARSING
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// SERVER LISTENER
app.listen(PORT, function() {
   console.log("App listening on PORT: " + PORT)
})