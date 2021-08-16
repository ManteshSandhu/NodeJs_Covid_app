const express = require('express');
const app = express();  
const port = 8887;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
next();
})


app.get('/retrieve', (req, res) => { 
    const input = req.query;  // parameters contained in the url (GET)
    var params= '';
    //res.write('<h2>Hello Class -' + req.method + '</h2>');
    for (const key in input)
     {
        params+= ' –' + input[key];
         //res.write('<li>' + key + ' –' + input[key] + '</li>');
        }
    // res.end(); 
    res.send({msg: 'Return from retrieve' + params});
})

app.post('/insert', (req, res) => { 
    const input = req.body.params;  // parameters contained in the body (POST)
    var params= '';
    //res.write('<h2>Hello Class -' + req.method + '</h2>');
for (const key in input) {
    params+= ' –' + input[key];
    //res.write('<li>' + key + ' –' + input[key] + '</li>');  
}
//res.end(); 
res.send({msg: 'Return from insert' + params});
 })

    app.listen(port, () => console.log(`Server running at localhost: ${port}!`))