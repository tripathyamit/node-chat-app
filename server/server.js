const path=require("path")
const express = require('express')
const http=require('http')
const socketIO=require("socket.io")
const app = express()
const server =http.createServer(app)


const {generateMessage}=require('./utils/message')
publicPath=path.join(__dirname,'../public')
port=process.env.PORT || 3000;
app.use(express.static(publicPath));
io=socketIO(server)
 
// app.get('/', function (req, res) {
//   res.render('index.html')
// })
 io.on('connection',(socket)=>{
      console.log("New user connected")
      socket.on('disconnect',()=>{
        console.log("Disconnected from client User")
      })
      socket.emit('newMessage',generateMessage('Admin','Welcome to chat app'))
      socket.broadcast.emit('newMessage',generateMessage('Admin','New User Joined'))
   

      socket.on('createMessage',(res,callback)=>{
        console.log('create Message',res)
        io.emit('newMessage',generateMessage(res.from,res.message))
        callback('This is from server');
        
      })


 })



server.listen(port,()=>{
    console.log("The app is running at port "+port)
})