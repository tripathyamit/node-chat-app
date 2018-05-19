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

   socket.on('createMessage',(res)=>{
     console.log('create Message',res)
     
   })
   socket.emit('newMessage',{from: 'server jane',
      message:'see you then',
      createdAt:'11223344'
    })


 })



server.listen(port,()=>{
    console.log("The app is running at port "+port)
})