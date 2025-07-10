async function getQuote() {
  try {
    const response = await fetch("https://devops-quote-app-production.up.railway.app/api/quote");

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    document.getElementById("quote").innerText = data.quote;
  } catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById("quote").innerText = "⚠️ Failed to load quote. Try again later.";
  }
}

// Call the function when the page loads
window.addEventListener("DOMContentLoaded", getQuote);
