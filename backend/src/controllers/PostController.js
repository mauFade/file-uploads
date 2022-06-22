const Post = require("../models/Post");

module.exports = {
  async create(req, res) {
    const { originalname: name, size, key, location: url = "" } = req.file;

    const post = await Post.create({
      name,
      size,
      key,
      url,
    });

    return res.status(200).send({ success: true, data: post });
  },

  async read(req, res) {
    const posts = await Post.find();

    return res.status(200).send({ success: true, data: posts });
  },

  async delete(req, res) {
    const post = await Post.findById(req.params.id);

    await post.remove();

    return res.status(200).send({ message: "Post deleted sucessfully" });
  },
};
