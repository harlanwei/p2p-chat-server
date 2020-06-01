const { model, Schema } = require("mongoose");
const utils = require("../utils");

const SchemaDefinitions = utils.requireAllUnder("models", "index");
const Models = SchemaDefinitions.map((def) => ({
  name: def.name,
  model: new model(def.name, new Schema(def.schema)),
}));
Models.forEach((m) => void (exports[m.name] = m.model));
