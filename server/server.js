const path=require("path")

publicPath=path.join(__dirname,'../public')

// console.log(publicPath)
port=process.env.PORT || 3000;
var express = require('express')
var app = express()

app.use(express.static(publicPath));
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port,()=>{
    console.log("The app is running at port "+port)
})