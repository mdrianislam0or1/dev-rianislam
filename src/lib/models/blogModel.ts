import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  id?: number;
  title?: string;
  desc?: string;
  technology?: string[];
  img?: string;
  link?: string;

}

const BlogSchema: Schema<IBlog> = new Schema({
  id: { type: Number, required: true, unique: true },

  title: { type: String, required: true },
  desc: { type: String, required: true },
  technology: { type: [String], required: true },
  img: { type: String, required: true },
  link: { type: String, required: true },

});

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
