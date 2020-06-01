module.exports = {
  TARGET_DATABASE:
    process.env.NODE_ENV === "production" ? "" : "mongodb://localhost/p2p",
  MESSAGE_TYPE: {
    TEXT: 0,
    IMAGE: 1,
    AUDIO: 3,
  },
};
