const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const db = require("./db/db");
const header_middleware = require("./middlewares/header");

const postRouter = require("./Routes/post");
const userRoutes = require("./Routes/user");
const profileRoutes = require("./Routes/profile");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(header_middleware);
const directory = path.join(__dirname, "./images");
app.use("/images", express.static(directory));

app.use("/api/posts", postRouter);
app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, (req, res) => {
  console.log(`app is listening to PORT ${PORT}`);
});

if (process.env.NODE_ENV == "production") {
  const path = require("path");

  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
