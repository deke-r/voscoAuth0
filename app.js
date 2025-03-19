const express=require('express');
const app=express();
const routes=require('./src/routes');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
require('dotenv').config();


app.use(express.static(path.join(__dirname, "./client/build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"./client/build/index.html"),
    function(err){
        res.status(500).send(err)
    }
    )
})
app.use('/',routes)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`);
    
})
