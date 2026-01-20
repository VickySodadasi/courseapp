const {userRouter} = router.express();


userRouter.post("/signup",(req,res)=>{
  res.json({
    message:"this is from signup endpoint"
  })
})

userRouter.post("/signin"(req,res)=>{
  res.json({
    message:"this is from signin endpoint"
  })
})
