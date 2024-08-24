import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reportSchema = new Schema({
  //some data
});

const Report = model("Report", reportSchema);
export default Report;
