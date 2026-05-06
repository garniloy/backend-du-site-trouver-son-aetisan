const express = require("express");
const router = express.Router();
const Artisan = require("../models/Artisan");
const Specialite = require("../models/Specialite");


// CREATE
router.post("/", async (req, res) => {
  try {
    const artisan = await Artisan.create(req.body);
    res.status(201).json(artisan);
  } catch (err) {
    res.status(500).json(err);
  }
});


// READ ALL
router.get("/", async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: Specialite,
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json(err);
  }
});


// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: Specialite,
    });
    res.json(artisan);
  } catch (err) {
    res.status(500).json(err);
  }
});


// UPDATE
router.put("/:id", async (req, res) => {
  try {
    await Artisan.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Updated" });
  } catch (err) {
    res.status(500).json(err);
  }
});


// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Artisan.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
