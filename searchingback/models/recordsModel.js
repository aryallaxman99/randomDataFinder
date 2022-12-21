import mongoose from "mongoose";

const recordSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  types: String,
  body: String,
});

const recordsModel = mongoose.model("records", recordSchema);

export default recordsModel;
