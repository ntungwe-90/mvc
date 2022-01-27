require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ntungwe:pose201@cluster0.k48si.mongodb.net/partner?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("server connected") 
})
