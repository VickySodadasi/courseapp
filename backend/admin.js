const {adminRouter} = require("express");

adminRouter.post("/signup",(req,res) => {
  res.json({
    message:"this is from signup end point "
  })
});

adminRouter.post("/signin",(req,res)=>{
  res.json({
    message:"this is from signin end point"
  })
});

adminRouter.get("/course",(req,res)=>{
  res.json({
    message:"this is from course end poiont"
  })
});

module.exports = {
  adminRouter : adminRouter
}
