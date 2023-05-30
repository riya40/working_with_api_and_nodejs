const express = require('express')
const database = require('./database');
const routes = require('./routes');

const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

database.connect().then(()=>{
    console.log('connect to mongoDB')
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port} `)
    })
}).catch(()=>{
        console.error('error connecting to mongodb:',error)
});

routes(app)