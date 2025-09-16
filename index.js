const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js + Jenkins on CentOS 9 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
