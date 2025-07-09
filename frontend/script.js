async function getQuote() {
  const response = await fetch("https://YOUR-RAILWAY-APP.onrender.com/api/quote"); // Replace with your Railway API URL
  const data = await response.json();
  document.getElementById("quote").innerText = data.quote;
}
