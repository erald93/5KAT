// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// CMD Project folder location
// cd C:\Users\Er4ld\Documents\5k

fs = require('fs');
const bodyParser = require("body-parser");

var app = require('express')();
var http = require('http').Server(app);


app.get('/', function(req, res){

    //res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/client/index.html');
});


//old way to serve static files
// app.use('/assets', function(req, res, next){

//     console.log(req.url);
//     next();
// })



//serve static files to client 
app.use('/assets', require('express').static('assets') );

app.use('/client', require('express').static(__dirname + '/client'));


app.use(bodyParser.urlencoded({ extended: false }));



app.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(`POST request: username is ${username} and password is ${password}`);
    res.end(`You are now logged in Mr(s) ${username}`);
    //res.status(204).send();

    
});




// Server Listening
http.listen(3000, function(){
  console.log('listening on *:3000');
});

// Socket.io Start
var io = require('socket.io')(http);


// Socket.io handling Connections
io.sockets.on('connection', function (socket) {
    console.log('a user connected');


    //create Room
    socket.on('createRoom', function(data){
        console.log(data.userName+' created room: '+data.roomName);



        socket.join(data.roomName);

    });
    

    //msg from client
    socket.on('happy',function(data) {
        console.log('happy msg from emit, socket io, '+ data.reason);

    })


    //msg from server
    socket.emit('serverMsg', {

        msg:'msg from server'
    });


    //disconnet
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });


})
