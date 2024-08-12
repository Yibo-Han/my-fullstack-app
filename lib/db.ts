import mongoose from "mongoose";

declare global {
  var mongoose: any;
}

const MONGODB_URI = "your_mongodb_uri_here";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Connected to MongoDB");
      return mongoose;
    }).catch((error) => {
      console.error("MongoDB connection error:", error);
      throw new Error("MongoDB connection failed");
    });
  }

  try {
    cached.conn = await cached.promise;

    // Perform a test query
    const db = mongoose.connection;
    db.once("open", () => {
      console.log("Test query: MongoDB connection is open");
    });

  } catch (error) {
    console.error("Failed to establish MongoDB connection:", error);
  }

  return cached.conn;
}

export default dbConnect;