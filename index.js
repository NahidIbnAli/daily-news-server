const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const categories = require("./data/category.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Yap, your server is running perfactly");
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const selectedCategory = news.filter((n) => n.category_id === id);
    res.send(selectedCategory);
  }
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(port, () => console.log("news server is running on port", port));
