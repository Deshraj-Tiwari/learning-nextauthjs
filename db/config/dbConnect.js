const mongoose = require("mongoose");

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("🚀 ~ dbConnect: Connected to MongoDB");
  } catch (error) {
    console.error("🚀 ~ dbConnect ~ error:", error.message);
    process.exit(1);
  }
}
