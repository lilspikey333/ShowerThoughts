const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/shower-thoughts", {
  useNewUrlParser: true
});

mongoose.Promise = Promise;

module.exports = mongoose;
