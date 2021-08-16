const express = require('express');
const app = express(); 
const port = 8888;
const bodyParser= require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept"); next();});

const data = require('./readFile');
app.get('/gFile1', (req, res) => {data.getFile1().then( sData => {res.send(sData); },err => {res.send(err); })})
app.get('/gFile2', (req, res) => {data.getFile2().then( sData => {res.send(sData); },err => {res.send(err); })})
app.get('/gFile3', (req, res) => {data.getFile3().then( sData => {res.send(sData); },err => {res.send(err); })})
app.get('/gFile4', (req, res) => {data.getFile4().then( sData => {res.send(sData); },err => {res.send(err); })})
app.get('/gFile5', (req, res) => {data.getFile5().then( sData => {res.send(sData); },err => {res.send(err); })})

app.listen(port, () => console.log(`Server running at localhost: ${port}!`))