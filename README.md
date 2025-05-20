# 🌍💱 Currency Converter

A sleek and user-friendly currency converter web application that enables users to convert between different currencies using up-to-date exchange rates. It also enhances the user experience by displaying relevant country flags based on selected currencies.

---

## 🔧 Key Features

- Fetches real-time currency exchange rates via an open-source API.
- Supports a wide range of global currencies.
- Pre-selects USD to INR as the default conversion.
- Displays flags corresponding to selected currencies using FlagsAPI.
- Clean and fully responsive design using Font Awesome icons.

---

## 💻 Technologies Used

- **HTML5** – Structuring the web page  
- **CSS3** – Styling and responsive design  
- **JavaScript (Vanilla)** – API handling and DOM manipulation  
- **FlagsAPI** – For displaying national flags  
- **Font Awesome** – UI icons for a modern look

---

## 📁 Project Directory Structure

```
Currency-Converter/
│
├── index.html       # Main HTML layout
├── style.css        # App styling and responsiveness
├── app.js           # Handles API calls and logic
├── codes.js         # Country code mappings for flags
├── Assets/          # Images and assets used
```

---

## 🚀 Getting Started

1. Download or clone the repository.
2. Ensure your internet connection is active (required for APIs and fonts).
3. Open `index.html` in any web browser.
4. Enter an amount, choose currencies, and click **Get Exchange Rate**.

---

## 🔗 APIs Used



- [Flags API](https://flagsapi.com/)  
  Used to show national flags for each selected currency.


---

## 📌 Additional Notes

- If a `404 Not Found` error occurs, verify the currency codes and API URL format.
- If flags fail to load, ensure the country codes are mapped correctly in `codes.js` and match the FlagsAPI URL requirements.
