const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const { Router } = require("express");
const app = express();
app.use(cors());


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
        name: "bezkoder-session",
        secret: "COOKIE_SECRET", // should use as secret environment variable
        httpOnly: true
    })
);
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

app.post("/api/auth/signup",(req,res)=>{
    //console.log(req.body);
    res.send(req.body);
});
app.post("/api/auth/signin",(req,res)=>{
    //console.log(req.body);
    res.send(req.body);
});
app.post("/api/auth/signout",(req,res)=>{
    //console.log(req.body);
    res.send(req.body);
})

const db = require("./model");
const Role = db.role;

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "moderator"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }


