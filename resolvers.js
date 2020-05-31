const mongoose = require("mongoose");
const { TARGET_DATABASE } = require("./constants");
mongoose.connect(TARGET_DATABASE, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.err);
