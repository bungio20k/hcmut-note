const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const PORT = process.env.PORT || 3001;
const app = express();
mongoose.connect("mongodb+srv://toanday:toan1402@cluster0.ssxqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));


const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
})

const userModel = mongoose.model('User', userSchema);

app.post('/vertify-login', (req, res) => {
  userModel.find({
    username: req.body.user, 
    password: req.body.password
  }).exec((data, err) => {
    if (err) console.error(err);
    // if (!data) res.json("User not found");
    // else res.json("Success");
    res.json(req.body);
  })
})

app.post('/register', (req, res) => {
  userModel.find({username: req.body.user}).exec((data, err) => {
    if (err) 
      console.error(err);
    res.json(data);
    // if (data) 
    //   res.json("Username already exists");
    // else {
    //   const newUser = new userModel({username: req.body.user, password: req.body.password});
    //   newUser.save((data, err) => {
    //     if (err) console.log(err);
    //     res.redirect('/login');
    //   })
    // }
  })
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});