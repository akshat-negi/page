const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(request,response)
{
    response.sendFile(__dirname+"/signup.html");
    })
     app.post("/",function(req,res)
    {
var firstname=req.body.fname;
console.log(req.body.lname);
    })
app.listen(3000,function()
{
    console.log("started");
})
//ReferenceError: url is not defined bcdab10655b174259b0c8457d4fb4b3c-us14