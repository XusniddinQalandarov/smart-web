const express = require("express");
const app = express();

// Use Azure's dynamic port or fallback to 3000 for local development
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Azure Web App!");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
