const express = require('express')
const app = express()

const vaccApp = express()

/*
Application: Application basically handles our api requests and responses. It is used to communicate with the webpage.
, Request: Request is basically the request made by the webpage with the visual studio code to fetch some info
, Response: Response is the result given by the visual studio code on it's interation with the webpage.
 and Router: It basically helps in segregating the code 
*/
// If PAckage-lock.json is not there we will not be able to run our app
app.get('/getInfo', function (req, res) {
  res.send('Info on the way.....')
})

//http://localhost:5000/getVaccine?Vaccine_name=Pfizer&price=50&doses=2
app.get('/getVaccine', function (req, res) {
    let vaccinName = req.query["Vaccine_name"]
    let vaccinPrice = req.query["price"]
    let doses = req.query["doses"]

    res.send(`Vaccine Name: ${vaccinName} \n
    Price: ${vaccinPrice} \n
    Doses: ${doses} \n
    `)
  })

  //RouteParam
  //http://localhost:5000/getId/1234
  app.get('/getId/:name',function(req,res){

    let vaccineId = req.params["name"]
    res.send(`Vaccination Id: ${vaccineId}`)

  })

  /*
  A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources.
  */

  //redierecting all vaccApp
app.use("/vaccinationDetails",vaccApp)

//using vaccApp to write an api:

//http://localhost:5000/vaccinationDetails/details?getVaccine?name=PFizer&price=50&doses=2
// vaccApp.get("/details",(req,res)=>{
//     let vaccinName = req.query["name"]
//     let vaccinPrice = req.query["price"]
//     let doses = req.query["doses"]

//     res.send(`Vaccine Name: ${vaccinName} \n
//     Price: ${vaccinPrice} \n
//     Doses: ${doses} \n
//     `)
// })

app.listen(5000)