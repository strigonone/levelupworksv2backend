const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const Student = require("./student");
const express = require("express");

// express app
const app = express();

// connect to mongodb
const uri =
	"mongodb+srv://gar1080:gar6969@missionreadyproject6.xoipl.mongodb.net/MissionReadyLevelUpWorks?retryWrites=true&w=majority";
mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => app.listen(8080))
	.catch((err) => console.log(err));

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
client.connect((err) => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
});

// mongoose and mongo sandbox routes

// Adding student manually from backend
app.get("/api/add-student", (req, res) => {
	const student = new Student({
		name: "Ricardo",
		email: "ricardo@email.com",
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

// Getting all students or mongodb collections
app.get("/api/all-students", (req, res) => {
	Student.find()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		});
});

const port = process.env.PORT || 6969;
app.listen(port, () => console.log(`Server ready at port ${port}`));
