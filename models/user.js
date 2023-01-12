const mongoose = require("mongoose");

// Create a schema for the data
const matchSchema = new mongoose.Schema({
  eventName: { type: String, required: true, unique: true },
  eventId: { type: String, required: true, unique: true },
  marketId: { type: String, required: true, unique: true },
});

// Create a model using the schema
const Match = mongoose.model("Match", matchSchema);
