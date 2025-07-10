const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Correct origin domain
app.use(cors({
  origin: 'https://harrygayla.github.io'
}));

const quotes = [
  "DevOps is the key to speed 🚀",
  "CI/CD makes dreams deploy 🌈",
  "Automate everything that can be automated 🤖",
  "Ship fast, learn faster 🏎️"
];

// ✅ Quote API
app.get('/api/quote', (req, res) => {
  const random = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[random] });
});

// Optional home route
app.get('/', (req, res) => {
  res.send("DevOps Quote Generator API is running 🎉");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
