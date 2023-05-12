import express from "express";
import cors from "cors";
import mongoose from "mongoose";


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/myLoginRegisterDB", {
    // userNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log("Error");
  });


//A Mongoose Schema defines the structure and property of the document in the MongoDB collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});


// A Mongoose model is a wrapper of the Mongoose schema. A Mongoose schema defines the document's properties, default values, types of data, validators, etc. In contrast, a Mongoose model provides an interface for the database to create, query, update, delete records, and so on.

const User = new mongoose.model("User", userSchema);

// Routes


// The app.post() function routes the HTTP POST requests to the specified path with the specified callback functions. 

app.post("/login", (req, res) => {
    //   res.send("My API login");


    // The req.body property contains key-value pairs of data submitted in the request body. By default, it is undefined and is populated when you use a middleware called body-parsing such as express.urlencoded() or express.json(). 

    const { email, password } = req.body


    // The findOne() function is used to find one document according to the condition. If multiple documents match the condition, then it returns the first document satisfying the condition. 

    User.findOne({ email: email })
    .then((user) => {
        if(user){
            if(password == user.password){
                res.send({message: "Login Successful",user:user})
            }
            else{
                res.send ({message : "Incorrect password"})
            }
        }
        else{
            res.send({message : "User not found"})
        }
    })
    .catch((err) => {
      console.log(err)
    })
});

app.post("/register", (req, res) => {
  // res.send("My API register")
  // console.log(req.body)
  const { name, email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
        if(!user){
            // res.send({message: "User not found"})
            console.log("User not found")
            const user = new User({
                name,
                email,
                password
            })

            //Save function saves the user in the database
            user.save().then(()=>{
                res.send({ message: "Successfully registered, Please login now !" });
            }).catch((err)=>{
                res.send(err);
            });

            return;
        }
        else{
            res.send({ message: "User already registered" })
        }
    })
    .catch((err) => {
      console.log(err)
    })
//   const { name, email, password } = req.body;
//   User.findOne({ email: email })
//     .then((user) => res.send({ message: "User already registered" }))
//     .catch((err) => {
//       res.send({message: "User not found"})
//       console.log(err)
//       const user = new User({
//         name,
//         email,
//         password
//       })
//       user.save((err) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send({ message: "Successfully registered" });
//         }
//       })
//     })

  //Save function saves the user in the database
  //while saving there might be some problem in the connection and it can show error hence the callback function to check error

  // User.findOne({email: email}, (err,user)=>{
  //     if(user){
  //         res.send({ message: "User already registered" })
  //     }
  //     else{
  //         const user = new User({
  //             name,
  //             email,
  //             password
  //         })
  //         user.save( err => {             //Save function saves the user in the database
  //             if(err) {                   //while saving there might be some problem in the connection and it can show error hence the callback function to check error
  //                 res.send(err)
  //             }
  //             else{
  //                 res.send({ message: "Successfully registered" })
  //             }
  //         })
  //     }
  // })
});

app.listen(9002, () => {
  console.log("BE started at port 9002");
});
