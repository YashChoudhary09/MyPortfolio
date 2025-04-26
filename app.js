const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

// middlewares
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));
app.engine("ejs",ejsMate);

// routes

// home page
app.get("/myportfolio",(req,res)=>{
    res.render("portfolio.ejs");
})
// skills page
app.get("/portfolio/skills",(req,res)=>{
   res.render("skills.ejs");
})
// education page
app.get("/portfolio/education",(req,res)=>{
    res.render("education.ejs");
})
// project page
app.get("/portfolio/project",(req,res)=>{
    res.render("project.ejs");
})
// certifiacte page
app.get("/portfolio/certificate",(req,res)=>{
    res.render("certificate.ejs")
})
app.listen(8080,()=>{
    console.log("app is listening!");
})