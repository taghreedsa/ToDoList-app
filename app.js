const express = require('express');
const bodyParser = require('body-parser')
const date = require("./date")
const app = express();


let items =["Buy Food" , "Cook Food" , "Eat Food"];
// To tell our app that we use ejs template
app.set('view engine' , 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.get("/" , function(req,res){
    let day = date()
    res.render("list" ,
     {kindOfDay:day , newListItem: items});
});
app.post("/" , function(req,res){
    let item = req.body.newItem;
    items.push(item)
    console.log("Hi this is the new item" + item)
    res.redirect('/')
})

app.get("/about" , function(req,res){
    res.render("about")
})



app.listen(3000 , function(){
    console.log("Server is running on port 3000")
})