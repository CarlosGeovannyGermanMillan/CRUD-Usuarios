const express = require('express');
const cors = require('cors');
const path=require('path');
const mysql = require('mysql');

const app = express();

const SELECT_CLIENTS_QUERY = 'SELECT * FROM USUARIOS';

const connection = mysql.createConnection({
    host:'db',
    user:'root',
    password:'root',
    database:'coppel'
});

connection.connect(err => {
    if(err){
        return err;
    }
})

app.use(cors());
app.use(express.static(path.join(__dirname,'build')));
app.get('/' , function(req,res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('/users/create',(req,res) => {
    const {nombre, apellidos, correo, edad} = req.query;

    const INSERT_USUARIOS_QUERY = `INSERT INTO USUARIOS (nombre, apellidos, correo, edad) 
                                VALUES ('${nombre}','${apellidos}','${correo}',${edad})`;
    
    connection.query(INSERT_USUARIOS_QUERY,(err,results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send('Usuario añadido correctamente');
        }
    })
})
app.get('/users/delete',(req,res) => {
    const {id} = req.query;
    const DELETE_USUARIOS_QUERY = `DELETE FROM USUARIOS
                                WHERE id = ${id}`;
    
    connection.query(DELETE_USUARIOS_QUERY,(err,results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send('Usuario eliminado correctamente');
        }
    })
})
app.get('/users/update',(req,res) => {
    const {nombre,apellidos,correo,edad,id} = req.query;
    const UPDATE_USUARIOS_QUERY = `UPDATE USUARIOS
                                SET nombre='${nombre}',
                                apellidos='${apellidos}',
                                edad=${edad},
                                correo='${correo}'
                                WHERE id = ${id}`;
    
    connection.query(UPDATE_USUARIOS_QUERY,(err,results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send('Usuario actualizado correctamente');
        }
    })
})
app.get('/users', (req,res) => {
    connection.query(SELECT_CLIENTS_QUERY,(err,results) =>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
})

app.listen(4000,() =>{
	console.log("Escuchando puerto 4000");
});