
var socket=io();
        socket.on('connect',function (){
            console.log('Connected to server.')
        });

        socket.on('disconnect',function () {
            console.log("Disconnected from server.")
        })
        // socket.emit('createMessage',{
        //     from:'amit',
        //     to:'jane',
        //     message:'Hey its amit!!'
        // })
        socket.on('newMessage',function(res){
            console.log(res)
        })