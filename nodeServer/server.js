const express = require('express') // impotrting the express module refrence 
const app = express() // instantiating express top method which returns application

//we can use multiple applications by mounting on the main app
const adminRoute = require("./router/admin_route");
const adminApp =  express();
//mounting my app
const userRoute = require("./router/user_router");
const userApp = express();


/*
4  major pillars of express:
1. Application
2. Request
3. Response
4. Router


*/
//Setting up the middleware static to handle all the static files we need to serve to client
//serve static files like images css using static middleware
app.use('/static',express.static('public')) // localhost:9000/static/alert.js   ||this is done to avoid creating apis over and over again.

console.log("We are in server js")
app.get('/', function (req, res) {
  res.send('Hello World')
})
// route param :/name - of the param //http://localhost:9000/routeprm/Jeffery/info
app.get('/routeprm/:name/info', function (req, res) {
  let routeParam = req.params["name"]

  res.send(`This is the name sent in Route param ${routeParam}`)
})

//query param
app.get('/queryparam', function (req, res) {
  
  let query = req.query["name"];
  res.send(`This is the name sent in query: ${query} `)
})

app.get('/queryparam2', function(req, res) {
  let query1 = req.query["Name"];  
  let query2 = req.query["lname"]; 
  let query3 = req.query["add"];
  
  res.send(`Info sent in query: 
  FirstName: ${query1} 
  LastName: ${query2} 
  Address: ${query3}`);
});

//html
app.get('/html', function (req, res) {
  

  res.send('<h1>Welcome To the MernStack Session</h1>')
})

//htmlfile
app.get('/file', function (req, res) {
  res.sendFile(__dirname+"/public/index.html")
})

app.get('/userFile',function(req,res){
  res.sendFile(__dirname+"/public/user.html")
})

// app.get('/alert.js', function (req, res) {
//   res.sendFile(__dirname+"/alert.js")
// })


//route param:/name - of the param
//post will give 404
app.get('/routeparam/:name/info', function (req, res) {
  
  let routeparam = req.params["name"];
  res.send(`This is the name sent in routeParam: ${routeparam} `)
})

app.get('/helloapi', function (req, res) {

  console.log("Reading Headers: "+req.rawHeaders);
  let deviceType = (req.headers)
console.log("deviceType: ",deviceType)
  if(deviceType=="Android"){
    res.json(`
    Device: Mobile
    Status:102
    Message: Switch off
    `)
  }
  else{
    res.json(`
    Device: NO
    Status:500
    Message: Switch on
    `)
  }

   
  })

  
console.log("Listening on port 9000")

//redierect all request with /admin path to adminapp
app.use('/admin',adminApp);

//redierecting user app requests
app.use('/userApp',userApp);

//mounted user app:
userApp.use('/',userRoute);

//mounted admin app
adminApp.use('/',adminRoute)
// adminApp.get('/hello',(req,res)=>{
//   res.send('<h1>helllo from admin</h1>')
// })



//Wild card operator or deafult response or api
app.get('*',(req,res)=>{
  res.send('<h2>API YOU ARE LOOKING FOR IS NOT READY YET</h2>')
});

//open the port for the api to start listening to the request / web request 
app.listen(9000)