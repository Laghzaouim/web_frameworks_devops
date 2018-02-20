const express = require('express');
const path = require('path');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

var db;

mongoClient.connect('mongodb://localhost:27017/myproject2', (err, _db) => {
    if (err != null)
    {
        console.log(err.message);
        throw err;
    }
    db = _db;
    console.log('connected to Mongo'); 
})




//Dit laten staan voor de ISS positie opvraging !
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let apiRouter = express.Router();

// Point static path to dist folder
app.use(express.static(path.join(__dirname, 'dist')));  

//breid de server code verder uit voor de REST API

server.use(bodyParser.json());
server.use('/api', apiRouter);

apiRouter.route('/space')

.get((req, res) => {
    //Select
    let query = req.query;
    //haal de eerste 10 scores op , oplopend gesorteerd volgens 'attempts' (aantal pogingen)
    db.collection("space").find(query).sort({attempts : 1}).limit(10).toArray((err, games) => {
        if (err != null)
        {
            res.statusCode("500");
            return;
        }
        res.json(games);
    })
})
.post((req,res) => {
    //Insert
    let request = req;
    db.collection("space").insert(req.body, (err, result) => {
        //Geef de toegevoegde score terug als response
        res.json(result.ops[0]);
    })
})




app.listen(3000, () => { console.log("server is running") });
