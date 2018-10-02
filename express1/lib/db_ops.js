const mysql = require('mysql')
var conn = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password    : 'feelingshitty',
    database    : 'tecsup_transport'
});
conn.connect();
var obj;

function read(){
    conn.query('SELECT * FROM alumno WHERE idalumno = ?',['1'],(err,rows,fields)=>{
        if(err) throw err
        console.log(rows[0])
        obj = rows[0]
    })
}

function edit(){
    conn.query('UPDATE alumno SET codigo = ? WHERE idalumno = ?',['999999','1'],(err,results,fields)=>{
        if(err) throw err
        console.log(results.affectedRows)
       // obj = rows[0]
    })
}

function erase(){
    conn.query('DELETE  FROM alumno WHERE idalumno = ?',['2'],(err,results,fields)=>{
        if(err) throw err
        console.log(results.affectedRows)
    })
}

function create(){
    conn.query('INSERT INTO alumno (codigo,nombre,paterno,correo) VALUES (?,?,?,?)',['111111','some','one','anywar@gmail.com'],(err,results,fields)=>{
        if(err) throw err
        console.log(results.affectedRows)
    })
}

//create()
//edit()
read()
erase()
conn.end()