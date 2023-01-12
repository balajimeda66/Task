const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./router/auth");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/testdb", {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connection is open");
  })
  .catch((err) => {
    console.log("mongo connection error");
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(3000, () => {
  console.log("backend server is running");
});
