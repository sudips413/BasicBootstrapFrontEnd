const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, 'uploads/');    
    }, 
    filename: function (req, file, cb) { 
       cb(null ,file.originalname +'.'+ path.extname(file.originalname));   
       
    }
 });

app.get('/', (req, res) => {  
   res.send("hello world");
});
const upload = multer({dest:'uploads'}).single("demo");
app.post("/audio", (req, res) => {
    upload(req, res, (err) => {
     if(err) {
       res.status(400).send("Something went wrong!");
     }
     res.send(req.file);
   });
 });
app.listen(5000, () => { 
    console.log('Started on port 5000');
});