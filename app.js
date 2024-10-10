const express = require("express");
const path = require("path");
const app = express();


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

     
app.get("/",(req,res)=>{
    res.send(`<h1> hiii You are here ! </h1> <br> If you are in search of image generator webpage ,  please click  <a href="/home">here</a>`);
})       


app.get("/home",(req,res)=>{
    res.render("home.ejs");
});

app.get("/home/generateImage",(req,res)=>{

    require('dotenv').config();
    let apiKey = process.env.ACCESS_KEY;

    console.log(apiKey);

    let {imageKey} = req.query;
    console.log(imageKey)
    const startingURL = 'https://api.unsplash.com/search/photos?query=';
    const endingURL = '&client_id=';
    fetch(startingURL+imageKey+endingURL+apiKey)
    
    .then(response => response.json())
    .then(data => {
      const links = [];
      data.results.forEach(photo => {
          console.log(photo.urls.small);
            links.push(photo.urls.small)
        });

        for(let link of links){
            console.log(link+"\n\n")
        }
        res.render("imageDisplay.ejs",{links,imageKey});
    })
    .catch(error => console.error('Error:', error));
   
})


app.get("*",(req,res)=>{
    res.send(`<h1> hiii You are here ! </h1> <br> If you are in search of image generator webpage ,  please click  <a href="/home">here</a>`);
})   


app.listen("3000",()=>{
    console.log("port is listening");
    console.log("server is active !!");
})
