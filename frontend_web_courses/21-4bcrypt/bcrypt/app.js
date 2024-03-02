require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const Student = require("./models/student");
const bcrypt = require("bcrypt");
const saltRounds = 12; // 8, 10, 12, 14

mongoose
  .connect("mongodb://localhost:27017/exampleDB")
  .then(() => {
    console.log("成功連結mongoDB....");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(
  session({
    secret: process.env.MYSESSIONSECRETKEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // localhost
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const verifyUser = (req, res, next) => {
  if (req.session.isVerified) {
    next();
  } else {
    return res.send("請先登入系統");
  }
};

app.get("/students", async (req, res) => {
  let foundStudent = await Student.find({}).exec();
  return res.send(foundStudent);
});

app.post("/students", async (req, res) => {
  try {
    let { username, password } = req.body;
    let hashValue = await bcrypt.hash(password, saltRounds);
    let newStudent = new Student({ username, password: hashValue });
    let savedStudent = await newStudent.save();
    return res.send({ message: "成功新增學生", savedStudent });
  } catch (e) {
    return res.status(400).send(e);
  }
});

app.post("/students/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    let foundStudent = await Student.findOne({ username }).exec();
    if (!foundStudent) {
      return res.send("信箱錯誤。查無使用者。");
    } else {
      let result = await bcrypt.compare(password, foundStudent.password);
      if (result) {
        req.session.isVerified = true;
        return res.send("登入成功。。。");
      } else {
        return res.send("登入失敗。。。");
      }
    }
  } catch (e) {
    return res.status(400).send(e);
  }
});

app.post("/students/logout", (req, res) => {
  req.session.isVerified = false;
  return res.send("你已經登出系統了。。。");
});

app.get("/secret", verifyUser, (req, res) => {
  return res.send("我的秘密是，我喜歡白居易的詩。");
});

app.listen(3000, () => {
  console.log("Server running on port 3000....");
});
