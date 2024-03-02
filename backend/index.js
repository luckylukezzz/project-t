const PORT = 8000
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://luckylukezzz:QWvDe9Xwnr8aP3u7@cluster0.hwm46wz.mongodb.net/'
const express = require('express');

const app = express();

app.get("/" , (req,res) => {
    res.json("hi there ")
})

app.get("/users", async (req,res) => {
    const client = new MongoClient(uri);

    try{
        await client.connect();
        const db =client.db("app-data");
        const users = db.collection("users");

        const returnedUsers = await users.find().toArray();
        res.send(returnedUsers);

    }finally{
        await clent.close();
    }
})

app.listen(PORT, () => console.log("running on port " + PORT ));