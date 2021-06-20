const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// connect to mongodb
const uri =
	"mongodb+srv://gar1080:gar6969@missionreadyproject6.xoipl.mongodb.net/MissionReadyLevelUpWorks?retryWrites=true&w=majority";
mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => console.log("Connected to DB"))
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
