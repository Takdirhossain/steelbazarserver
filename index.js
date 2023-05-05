const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
env.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

const auth = require("./routes/auth") 
const uri =
  "mongodb+srv://ecommerce:ecommerce@cluster0.eurlfla.mongodb.net/steelbazar?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("databse connect");
  });


app.use("/api/auth", auth )


app.use("/", (req, res) => {
  res.send("Welcome to steel bazar");
});
app.listen(port, () => {
  console.log(`our server is running ${port}`);
});
