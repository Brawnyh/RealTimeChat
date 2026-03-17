var Express = require('express');
var app = Express();
const PORT=3000;


app.use(Express.json());
console.log('Server is running on port 3000');

//callbacks

app.get('/',(req,res)=>{
    res.send('Welcome to the live chat application');
});



app.get('/messages',(req,res)=>{
    res.send('Here are the messages');
});

//esto es lo q nos permite registrar algo en la base de datos
app.post('/messages:id',(req,res)=>{
    res.send(`Message with id ${req.params.id} has been posted`);
});

app.listen(PORT,()=>{
    console.log(`Server is listening on port:${PORT}`);
});

