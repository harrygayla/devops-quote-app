async function getQuote() {
  const response = await fetch("https://devops-quote-app-production.up.railway.app/api/quote"); // Replace with your Railway API URL
  const data = await response.json();
  document.getElementById("quote").innerText = data.quote;
}
