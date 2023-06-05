import { Router } from "express";
import { sample_Items, sample_tags } from "../data";
import asynceHandler from "express-async-handler";
import { ItemModel } from "../models/item.model";

const router = Router();

router.get(
  "/seed",
  asynceHandler(async (req, res) => {
    const productCount = await ItemModel.countDocuments();
    if (productCount > 0) {
      res.send({ message: "Sample data already exists" });
      return;
    }

    await ItemModel.create(sample_Items);
    res.send("Sample data created");
  })
);

router.get(
  "/",
  asynceHandler(async (req, res) => {
    const items = await ItemModel.find();
    res.send(items);
  })
);

router.get(
  "/search/:searchTerm",
  asynceHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, "i");
    const items = await ItemModel.find({name: {$regex:searchRegex}});
    res.send(items);
  })
);

router.get(
  "/tags",
  asynceHandler(async (req, res) => {
    const tags = await ItemModel.aggregate([
      { $unwind: "$tags" },
      { $group: { _id: "$tags", count: { $sum: 1 } } },
      { $project: { _id: 0, name: "$_id", count: "$count" } },
    ]).sort({ count: -1 });

    const all = { name: "All", count: await ItemModel.countDocuments() };
    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  "/tags/:tagName",
  asynceHandler(async (req, res) => {
    const items = await ItemModel.find({ tags: req.params.tagName });
    res.send(items);
  })
);

router.get(
  "/:itemId",
  asynceHandler(async (req, res) => {
    const item = await ItemModel.findById(req.params.itemId);
    res.send(item);
  })
);

export default router;
