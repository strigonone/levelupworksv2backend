const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const express = require("express");
const Student = require("./student");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

// express app
const app = express();

dotenv.config();

// connect to mongodb
mongoose
  .connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(8080))
  .catch((err) => console.log(err));

const client = new MongoClient(process.env.DATABASE_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// Adding student manually from backend
app.get("/api/add-student", (req, res) => {
  const student = new Student({
    name: "Ricardo",
    email: "ricardo@email.com",
    password: "qwer",
  });

  student
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


app.use(express.json());
app.use(cors());
app.use("/api", routesUrls);

const port = process.env.PORT || 6969;
app.listen(port, () => console.log(`Server ready at port ${port}`));
