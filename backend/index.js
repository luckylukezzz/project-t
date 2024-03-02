const PORT = 8000
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://luckylukezzz:QWvDe9Xwnr8aP3u7@cluster0.hwm46wz.mongodb.net/'
const express = require('express');
const {v4: uuidv4} = require ("uuid");
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')
require('dotenv').config()


const app = express();
app.use(cors())
app.use(express.json())


app.get("/" , (req,res) => {
    res.json("hi there ")
})

app.post("/signup" , async (req,res) => {
    const client = new MongoClient(uri)
    const {email, password} = req.body

    const generatedUserId = uuidv4()
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const existingUser = await users.findOne({email})
        console.log("im" + existingUser)
        if (existingUser) {
            return res.status(409).send('User already exists. Please login')
        }

        const sanitizedEmail = email.toLowerCase()

        const data = {
            user_id: generatedUserId,
            email: sanitizedEmail,
            hashed_password: hashedPassword
        }
        console.log("im after data" + data)
        const insertedUser = await users.insertOne(data)

        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 60 * 24
        })
        res.status(201).json({token, userId: generatedUserId})

    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
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
        await client.close();
    }
})

app.listen(PORT, () => console.log("running on port " + PORT ));