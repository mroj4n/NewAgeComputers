import { Router } from "express";
import jwt from "jsonwebtoken";
import asynceHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import { sample_Items, sample_tags, sample_users } from "../data";
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";

const router = Router();

router.get(
  "/seed",
  asynceHandler(async (req, res) => {
    const productCount = await UserModel.countDocuments();
    if (productCount > 0) {
      res.send({ message: "Sample data already exists" });
      return;
    }

    await UserModel.create(sample_users);
    res.send("Sample data created");
  })
);

router.post(
  "/login",
  asynceHandler(async (req, res) => {
    const body = req.body;
    const user = await UserModel.findOne({
      email: body.email
    });
    if (user && (await bcrypt.compare(body.password, user.password))) {
      res.send(generateTokenResponse(user));
    } else {
      res.status(HTTP_BAD_REQUEST).send({ message: "Invalid email or password" });
    }
  })
);

router.post('/register', asynceHandler(async (req, res) => {
    const {name, email, password, address} = req.body;
    const user = await UserModel.findOne({email});
    if(user) {
        res.status(HTTP_BAD_REQUEST).send({message: "User already exists, Please sign in"});
        return;
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser:User = {
        id:'',
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false
    }

    const createdUser = await UserModel.create(newUser);
    res.send(generateTokenResponse(createdUser));
}))

const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "secret",
    { expiresIn: "3d" }
  );

  user.token = token;
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token
  };
};

export default router;
