const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/signup",req,res()=>{
  res.send("hello this is from sign up end point");
})

router.post("/signin",req,res()=>{
  res.send("this is from signin endpoint");

})

router.post("/deleteuser"req,res()=>{
  res.send("this is from delete end point");
})
