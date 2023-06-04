import express = require("express");
import cors from "cors";
import { sample_Items, sample_tags,sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
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

app.post("/api/users/login", (req, res) => {
  const body = req.body;
  const user = sample_users.find(user => user.email == body.email && user.password == body.password);
  if(user){
    res.send(generateTokenResponse(user));
  }
  else{
    res.status(401).send({message: "Invalid email or password"});
  }

});

const generateTokenResponse = (user: any) => {
  const token = jwt.sign({
    email: user.email, isAdmin: user.isAdmin
  }, 'secretKey',{expiresIn: '1h'});

  user.token = token;
  return user;
}

const port = 5000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
