// object
// window global object
// in chrome global object is window and in node global object is global
//////////////////////////////////////////////////////
//module : یک فایل جا.وا اسکریپتی که در ان کد های جاوا اسکریپتی وجود دارد و ماژول ها  یک مین ماژول دارند که همان فایل اندکس جی اس میباشد
//  درون هر ماژول یک سری ابجکت وجود دارد که اطلاعات که اطلاعاتی به ما میده میگن ماژول
// console.log(module);

//  create a module
// const { addition, subtraction } = require("./calculator");

// console.log(addition(3, 8), subtraction);

// module wraper function

// const path = require("path");

// let parsPath = path.parse(__filename);
// console.log(parsPath);

// // os information about your device

// const os = require("os");

// console.log("free memory", os.freemem());
// console.log("totoalmem memory", os.totalmem());

// sync == blocking

// const fs = require("fs");
// const file = fs.readdir("./", (err, files) => {
//   console.log("err", err);
//   console.log("files", files);
// });

// console.log(file);

// about event

// ایونت دو جز اساسی دارد یک خود رویداد و صدا زدن رویداد

// const EventEmitter = require("events");

// // console.log(EventEmitter);
// const emiiter = new EventEmitter();

// emiiter.on("bell", (e) => {
//   console.log(e);
//   console.log("open the door");
// });

// emiiter.emit("bell", { time: Date.now(), count: 2 });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   //   // //req have some information
//   //   // //res can response the information
//   //   // console.log(req.url);
//   //   // res.end();
//   if (req.url === "/") {
//     res.write("home page");
//   } else if (req.url === "/product") {
//     res.write(JSON.stringify({ product: ["product1", "product2"] }));
//   } else {
//     res.write("not found");
//   }
//   res.end();
// });
// server.listen(3000);

// const moment = require("jalali-moment");

// console.log(moment(new Date()).locale("fa").format("YYYY/MM/DD"));
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("hello Express");
// });
// app.get("/api/users/", (req, res) => {
//   console.log(req.query);
//   res.send([
//     { id: 1, name: "user1" },
//     { id: 2, name: "user2" },
//     { id: 3, name: "user3" },
//   ]);
// });
// app.get("/api/users/:id", (req, res) => {
//   console.log(req.params);
//   res.send({ id: req.params.id, name: `user${req.params.id}` });
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
///query string use for filter of data

const express = require("express");
const users = require("./users");
const app = express();

app.get("/api/users", (req, res) => {
  res.json(users);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
