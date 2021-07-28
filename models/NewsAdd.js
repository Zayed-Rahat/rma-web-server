const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    // category: {
    //   type: ObjectId,
    //   ref: "Category",
    // },
   
     images: {
       type: Array,
     },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
