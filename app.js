const express = require('express');
const path = require('path');
const data = require('./data/data');
const app = express();
const PORT = 3000;
const dataSave = data.module;

//Motor de plantillas
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//Carpeta publica
app.use(express.static(path.join(__dirname, 'public')));

//End point
app.get('/', (req, res)=>{
    res.render('index', { data:dataSave });
})

//Levantar server
app.listen(PORT, ()=>{
    console.log(`###############################################`)
    console.log(`######## Server runnin on port: ${PORT}!!! #######`)
    console.log(`###############################################`)
})