const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000


const ApiData = require('./data/ApiData.json');
const NewsApi = require('./data/news.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send("My server is successfully created")
});


app.get('/apiData', (req, res) =>{
    res.send(ApiData)
});

app.get('/newsApi', (req, res) =>{
    res.send(NewsApi)
})


app.listen(port, () =>{
    console.log("practice-website-server is running", port)
});