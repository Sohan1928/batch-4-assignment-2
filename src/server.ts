import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");

    // Start the Express app
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
}
main();
