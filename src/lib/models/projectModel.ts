import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  id?: number;
  color?: string;
  title?: string;
  desc?: string;
  technology?: string[];
  img?: string;
  link?: string;
  code?: string;
}

const ProjectSchema: Schema<IProject> = new Schema({
  id: { type: Number, required: true, unique: true },
  color: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  technology: { type: [String], required: true },
  img: { type: String, required: true },
  link: { type: String, required: true },
  code: { type: String, required: true }
});

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
