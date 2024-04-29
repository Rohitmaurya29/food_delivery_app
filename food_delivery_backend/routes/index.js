var express = require('express');
var router = express.Router();
const cors= require("cors");
const bcrypt= require("bcrypt");
const mongoose= require("mongoose")
const session= require("express-session")
const unique= require("mongoose-unique-validator");

router.use(cors());

mongoose.connect('mongodb://localhost:27017/DeliveryDetails');

const schema= new mongoose.Schema({
  fullname:String,
  username:{
    type:String,
    unique:true
  },
  email:String,
  password:String
})

schema.pre("save", async function(next){
  const user = this;

  //check if password is modified or new
  if (!user.isModified("password")){
    return next();
  }

  try{
    //generation of salt
    const salt= await bcrypt.genSalt(10);

    //hash password
    const hashedPassword= await bcrypt.hash(user.password, salt);

    //set hashed password in the user document
    user.password= hashedPassword;
    next();
  }catch(error){
    return next(error);
  }

})

router.use(session({
  secret:"key",
  resave:false,
  saveUninitialized:false
}));

// schema.plugin(unique);

const model= mongoose.model("PersonDetails", schema);

// router.post("/registration",(req,res)=>{
//   model.create(req.body).then((result)=>{
//     res.json(result);
//   }).catch((err)=>{
//     res.json(err);
//   })
// });

router.post("/registration",(req,res)=>{
  const fullname= req.body.fullname;
  const username= req.body.username;
  const email= req.body.email;
  const password= req.body.password;
  const inputData= new model({
    fullname:fullname,
    username:username,
    email:email,
    password:password
  })
  inputData.save()
  res.json(inputData)
})

// router.post("/login",(req,res)=>{
//   const username= req.body.username;
//   const password= req.body.password;
//   model.findOne({username:username}).then((data)=>{
//     if(data.password===password){
//      res.json(data);
//     }
//   }).catch((err)=>{
//     res.json(err);
//   })
//   })

router.post("/login",(req,res)=>{
  const username= req.body.username;
  const password= req.body.password;
  
  model.findOne({username:username}).then((data)=>{
    if (!data) {
      // If user with provided username not found
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the hashed password
    bcrypt.compare(password, data.password, function(err, result) {
      if (err) {
        // Handle error
        return res.status(500).json({ message: "Internal server error" });
      }
      
      if (result) {
        // Passwords match, user authenticated
        req.session.user = data; // Store user in session
        return res.status(200).json({ message: "Login successful", user: data });
      } else {
        // Passwords don't match
        return res.status(401).json({ message: "Invalid password" });
      }
    });
  }).catch((err)=>{
    res.status(500).json({ message: "Internal server error" });
  });
});

router.post("/logout", (req, res) => {
 const destroy= req.session.destroy;
 res.json(destroy);
});


  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
