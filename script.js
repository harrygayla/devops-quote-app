async function getQuote() {
  const response = await get("https://devops-quote-app-production.up.railway.app/api/quote"); // Replace with your Railway API URL
  const data = await response.json();
  document.getElementById("quote").innerText = data.quote;
}
