const mongoose = require("mongoose");
const MONGOURI = require("./config/keys");
mongoose.Promise = global.Promise;

const url = MONGOURI;
// Connect MongoDB at default port 27017.
let mong = mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
