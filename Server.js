const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const port = process.env.PORT;
const dbUsername = process.env.DB_USER_NAME;
const dbPassword = process.env.DB_USER_PASS;

const arRoute = require("./routes/ar.routes");

const uri = `mongodb+srv://${dbUsername}:${dbPassword}@lndmrkcluster.mqpvvka.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log("You have successfully connected to the database."))
  .catch((error) => console.log("Error while connecting to atla", error));

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/ar", arRoute);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
