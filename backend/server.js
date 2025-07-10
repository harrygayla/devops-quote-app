const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS (so frontend can talk to backend)
app.use(cors());

const quotes = [
  "DevOps is the key to speed 🚀",
  "CI/CD makes dreams deploy 🌈",
  "Automate everything that can be automated 🤖",
  "Ship fast, learn faster 🏎️"
];

app.get('/api/quote', (req, res) => {
  const random = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[random] });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
