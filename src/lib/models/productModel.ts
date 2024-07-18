import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  id?: number,
  color?: string,
  title?: string,
  desc?: string,
  technology?: string[],
  img?: string,
  link?: string,
  code?: string
}





const ProductSchema: Schema<IProject> = new Schema({

});

const Product: Model<IProject> =
  mongoose.models.Product || mongoose.model<IProject>("Product", ProductSchema);

export default Product;
