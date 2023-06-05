import path from "path";
import { fileURLToPath } from "url";
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

import { connect } from "mongoose";
export async function connectMongo() {
  try {
    await connect(
      "mongodb+srv://aaronchodev:Shakosuki1@ecommerce.igp15kx.mongodb.net/"
    );
    console.log("plug to mongo!");
  } catch (e) {
    console.log(e);
    throw new Error("can not connect to the db");
  }
}