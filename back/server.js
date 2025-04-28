const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'sasi',
    database: 'new_db'
})

db.connect((err)=>{
    if(err){
        console.log('Database Error');
    }else{
        console.log('Database Connected Successfully!');
    }
})

app.post('/add',(req,res)=>{
    const {name} = req.body;
    console.log(name);
    const sql = 'INSERT INTO TEST (name) VALUES (?)';
    db.query(sql,[name],(err)=>{
        if(err){
            res.status(500).json({message: 'Database Error'})
        }else{
            res.status(201).json({message: 'User Added'})
        }
    })
})

app.listen(5000,()=>{
    console.log('Server is running at http://localhost:5000');
})