const path=require("path")
const express = require('express')
const http=require('http')
const socketIO=require("socket.io")

const app = express()
const server =http.createServer(app)
io=socketIO(server)
publicPath=path.join(__dirname,'../public')
port=process.env.PORT || 3000;

app.use(express.static(publicPath));
 
// app.get('/', function (req, res) {
//   res.render('index.html')
// })
 io.on('connection',(socket)=>{
      console.log("New user connected")
      socket.on('disconnect',()=>{
        console.log("Disconnected from client User")
      })
      socket.emit('newMessage',{
        from: 'Admin',
        text: 'Welcome to chat app'
      })
      socket.broadcast.emit('newMessage',{
        from:'Admin',
        text:"New user joined.",
        createdAt: new Date().getTime()
      })
   

      socket.on('createMessage',(res)=>{
        console.log('create Message',res)
        io.emit('newMessage',{
          from:res.from,
          to : res.message,
          createdAt: new Date().getTime()
        })
        
      })


 })



server.listen(port,()=>{
    console.log("The app is running at port "+port)
})