const {MongoClient} = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = "Simpleform";

async function mongoConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("User_info");
}
module.exports = mongoConnect;
