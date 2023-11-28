import { config } from "dotenv";
import mongoose from "mongoose";
config();
//const { username, password } = process.env;

export const MONGODB_URL = process.env.MONGODB_URI;
//"mongodb+srv://yogeshgiri:LdQ01A113lqkRT1h@mernstack.40km1ck.mongodb.net/usersdb";

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log(`[database] connected`);
  } catch (e) {
    console.log(`[database] ${e.message}`);
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};
export default dbConnect;
