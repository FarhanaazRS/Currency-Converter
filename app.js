// Get DOM elements
const btn = document.querySelector("form button");
const fromCurr = document.querySelector("[name='from']");
const toCurr = document.querySelector("[name='to']");
const msg = document.querySelector(".msg");

// Base URL for exchange rate API
const BASE_URL = "https://api.exchangerate-api.com/v4/latest";

// Populate dropdowns with currency options
for (let currCode in countryList) {
  let newOption = document.createElement("option");
  newOption.innerText = currCode;
  newOption.value = currCode;
  if (currCode === "USD") {
    newOption.selected = "selected";
  }
  fromCurr.appendChild(newOption);
}

for (let currCode in countryList) {
  let newOption = document.createElement("option");
  newOption.innerText = currCode;
  newOption.value = currCode;
  if (currCode === "INR") {
    newOption.selected = "selected";
  }
  toCurr.appendChild(newOption);
}

// Function to update flag
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Add event listeners for dropdown changes
fromCurr.addEventListener("change", (evt) => {
  updateFlag(evt.target);
});

toCurr.addEventListener("change", (evt) => {
  updateFlag(evt.target);
});

// Button click event listener
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal <= 0) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromCurr.value}`;

  try {
    const response = await fetch(URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const rate = data.rates[toCurr.value];

    if (!rate) {
      msg.innerText = `❌ Failed to retrieve exchange rate for ${fromCurr.value} to ${toCurr.value}.`;
      return;
    }

    const finalAmount = (rate * amtVal).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    console.error("Fetch error:", error);
    msg.innerText = "⚠️ Unable to fetch exchange rate. Please try again later.";
  }
});

// Initialize flags on page load
window.addEventListener("load", () => {
  updateFlag(fromCurr);
  updateFlag(toCurr);
});