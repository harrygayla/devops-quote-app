const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
  "DevOps is a mindset, not a toolset.",
  "CI/CD is the heartbeat of modern development.",
  "Automate everything that can be automated.",
  "Ship fast, learn faster."
];

app.get("/api/quote", (req, res) => {
  const random = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[random] });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
