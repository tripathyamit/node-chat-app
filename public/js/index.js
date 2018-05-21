
var socket=io();
        socket.on('connect',function (){
            console.log('Connected to server.')
        });

        socket.on('disconnect',function () {
            console.log("Disconnected from server.")
        })
        socket.on('newMessage',function(res){
            console.log(res)
            var li=jQuery("<li></li>")
            li.text(`${res.from}: ${res.text}`)

            jQuery('#messages').append(li);
        })

        // socket.emit('createMessage',{
        //     from:'Ashis',
        //     text:'Hi!!'
        // },function(data){
        //     console.log('Got It!',data);
        // })

        jQuery('#message-form').on('submit',function(e){
            e.preventDefault();
            socket.emit('createMessage',{
                from:'user',
                message:jQuery('[name =message]').val()
            },function(awknowledgement){
                console.log(awknowledgement)
            })
            
        })

