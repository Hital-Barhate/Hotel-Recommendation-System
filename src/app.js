let express=require("express");
let app=express();

let conn=require("./config/db.js");

app.get("/",(req,res)=>{
    res.send("Hello world");
});
module.exports=app;