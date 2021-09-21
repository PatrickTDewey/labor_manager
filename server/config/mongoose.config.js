const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/workers", {useNewUrlParser: true,useUnifiedTopology: true,})
  .then(() => console.log("Established a connection to the database"))
  .catch((err) => console.log("Something went wrong when connecting to the db", err))