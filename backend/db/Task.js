const mongoose = require("mongoose");

const TaskSchemma = new mongoose.Schema({
  title: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [100000, "name should not be more than 900 characters"],
  },
  productImages: [
    {
      type: String,
      required: "true",
      trim: "true",
      maxLength: [85, "url  should not be more than 85 characters"],
    },
    {
      type: String,
      required: "true",
      trim: "true",
      maxLength: [85, "url  should not be more than 85 characters"],
    },
    {
      type: String,
      required: "true",
      trim: "true",
      maxLength: [85, "url  should not be more than 85 characters"],
    },
    {
      type: String,
      required: "true",
      trim: "true",
      maxLength: [85, "url  should not be more than 85 characters"],
    },
    {
      type: String,
      required: "true",
      trim: "true",
      maxLength: [85, "url  should not be more than 85 characters"],
    },
    {
      type: String,
      required: "true",
      trim: "true",
      maxLength: [85, "url  should not be more than 85 characters"],
    },
    {
      type: String,
      required: "true",
      trim: "true",
      maxLength: [85, "url  should not be more than 85 characters"],
    },
    {
      type: String,
      required: "true",
      trim: "true",
      maxLength: [85, "url  should not be more than 85 characters"],
    },
  ],
  category: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [25, "category should not be more than 25 characters"],
  },
  subcategory: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [25, "category should not be more than 25 characters"],
  },
  Reviews: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [3, "Review should not be more than than 3 characters"],
  },
  TotalReviews: {
    type: "String",
    required: "true",
    trim: "true",
    maxLength: [20, "should not be more than characters"],
  },
  Brand: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [9, "brand should not be more than 9 characters"],
  },
  Sale_price: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [11, "price should not more than 6 characters"],
  },
  currency: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [7, "currency should not more than 6 characters"],
  },
  discount: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [6, "discount should not more than 2 characters"],
  },
  Original_price: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [25, "price_before_discount should not more than 25 characters"],
  },
  variants: [
    {
      type: String,
      required: "true",
      maxLength: [32, "text should not be more than 32 characters"],
    },
    {
      type: String,
      required: "true",
      maxLength: [32, "text should not be more than 32 characters"],
    },
    {
      type: String,
      required: "true",
      maxLength: [32, "text should not be more than 32 characters"],
    },
    {
      type: String,
      required: "true",
      maxLength: [32, "text should not be more than 32 characters"],
    },
  ],
  productiD: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [15, "should not be more than 15 characters"],
  },
  color: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [20, "should not be more than 20 characters"],
  },
  Size: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [35, "should not be more than 35 characters"],
  },
  Netweight: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [25, "should not be more than 25 characters"],
  },
  sku: {
    type: String,
    required: "true",
    trim: "true",
    maxLength: [11, "should not be more than 11 characters"],
  },
});
module.exports = mongoose.model("Productsdatas", TaskSchemma);
