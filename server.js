var Express = require('express');
var app = Express();

console.log('Server is running on port 3000');

//callbacks

app.get('/',(req,res)=>{
    res.send('Welcome to the live chat application');
});

app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
});

