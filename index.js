const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("Hello from Node.js + Jenkins on CentOS 9 🚀");
});

app.listen(PORT, "192.168.0.104", () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});
