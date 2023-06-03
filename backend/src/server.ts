import express = require("express");
import cors from "cors";
import { sample_Items, sample_tags } from "./data";

const app = express();
app.use(cors({ credentials: true, origin: ["http://localhost:4200"] }));

app.get("/api/items", (req, res) => {
  res.send(sample_Items);
});

app.get("/api/items/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const items = sample_Items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(items);
});

app.get("/api/items/tags", (req, res) => {
    res.send(sample_tags);
});

app.get("/api/items/tags/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const items = sample_Items.filter(item => item.tags?.includes(tagName));
    res.send(items);
});

app.get("/api/items/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const items = sample_Items.find(item => item.id == itemId);
    res.send(items);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
