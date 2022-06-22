const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

const PostController = require("./controllers/PostController");

router.post("/posts", multer(multerConfig).single("file"), PostController.create);
router.get("/posts", PostController.read);
router.delete("/posts/:id", PostController.delete);

module.exports = router;
