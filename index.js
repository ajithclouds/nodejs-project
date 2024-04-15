const express = require("express");

require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  console.log("Development Environment");
} else {
  console.log("Production Environment");
}

/**
 * 1. CREATE HTTP SERVER
 * 2. LISTEN TO A PORT
 */
const PORT =
  process.env.NODE_ENV === "development"
    ? process.env.NODE_DEV_PORT
    : process.env.NODE_PROD_PORT;

const HTTP_SERVER = express();

HTTP_SERVER.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "SERVER RUNNING SUCCESSFULLY",
  });
});

HTTP_SERVER.listen(PORT, "0.0.0.0", () => {
  console.log(`SERVER STARTED SUCCESSFULLY AT ${PORT}`);
});