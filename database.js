const { CONSTRAINT } = require('sqlite3');

const sqlite3 = require('sqlite3').verbose();
let sql;
let msg;

//connect db

const db=new sqlite3.Database('./chat.db',sqlite3.OPEN_READWRITE,(err) =>{
    if(err) return console.error(err.message);
});
//create table
//sql=`CREATE TABLE Users(id INTEGER PRIMARY KEY,name,email)`;
//db.run(sql);

//sql=`INSERT INTO Users(name,email) VALUES('Fred pancho','fred.doe@example.com')`;
//db.run(sql,[],(err)=>{
//    if(err) return console.error(err.message);
//    console.log('A new user has been added');
//});

//msg=`CREATE TABLE Messages(ID INTEGER PRIMARY KEY,message,user_id,timestamp)`;
//db.run(msg,[],(err)=>{
//    if(err) return console.error(err.message);
//    console.log('Messages table created');
//});


//msg=`INSERT INTO Messages(message,user_id,timestamp) VALUES('Hello, how are you?',1,datetime('now'))`;
//db.run(msg,[],(err)=>{
//    if(err) return console.error(err.message);
//    console.log('A new message has been added');
//});

//conex=`ALTER TABLE Messages ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES Users(id)`;

//db.run(conex,[],(err)=>{
//    if(err) return console.error(err.message);
//    console.log('Foreign key constraint added to Messages table');
//});

msg=`SELECT * FROM Messages`;
db.all(msg,[],(err,rows)=>{
    if(err) return console.error(err.message);
    console.log(rows);
});

sql=`SELECT * FROM Users`;
db.all(sql,[],(err,rows)=>{
    if(err) return console.error(err.message);
    console.log(rows);
});

module.exports=db;

