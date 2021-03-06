require("dotenv").config();

const { MongoClient } =require("mongodb");

const client = new MongoClient(process.env.MONGO_URL);

const connection = async () => {
    try {
        await client.connect();
        console.log("Success")
        const db = client.db("Films");
        return db.collection("Films")
    } catch (error) {
        console.log(error);
    }
};

//  use this fuction to check connection to db connction ();
// connection();

module.exports = { connection, client };