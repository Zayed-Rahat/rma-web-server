const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
    create,
    listAll,
    remove,
    read,
    update,
  } = require("../controllers/NewsAdd");

// routes
router.post("/news", authCheck, adminCheck, create);
router.get("/allNews/:count", listAll); // products/100
router.delete("/news/:slug", authCheck, adminCheck, remove);
router.get("/news/:slug", read);
router.put("/news/:slug", authCheck, adminCheck, update);

module.exports = router;
