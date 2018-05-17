const path=require("path")

publicPath=path.join(__dirname,'../public')

console.log(publicPath)

var express = require('express')
var app = express()

app.use(express.static(publicPath));
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000,()=>{
    console.log("The app is running at port 3000")
})