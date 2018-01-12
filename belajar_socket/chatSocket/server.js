var app = require('express')()
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html' );
});

io.on('connection', function(socket){

    //message baru yang diterima
    socket.on('newMessage', function(msg){
        io.emit('newMessage', msg)
    })

    //Kalo user disconnect
    socket.on('Disconnect', function(msg){
         console.log('User Disconnected')
    })
})

http.listen(3000,() => {
    console.log('Listening on 3000...')
});