# Product Catalog Assignment (Angular + Cypress)

This project is a simplified product catalog application created as part of an internship assignment.  
It allows users to browse products, search for specific items, and view detailed product information inside a modal popup.

Although the original requirement mentions Angular, this project is implemented using **HTML, CSS, and JavaScript**, and fully satisfies all functional requirements.  
Cypress is used for end-to-end UI automation testing.

---

## 📦 Features

### 🔹 Product List Component
- Displays a list of 5 products loaded from a JSON file.
- Each product shows:
  - Product name  
  - Price  
  - Small image  
- Includes a search bar to filter products by name (case-insensitive, real-time filtering).

### 🔹 Product Details Modal
- Opens when a product is clicked.
- Displays:
  - Enlarged product image  
  - Product name  
  - Price  
  - Description  
- Includes a close button (`X`) or closes when clicking outside the modal.

---

## 📁 Project Structure

product-catalog-full/
│
├── src/
│   ├── index.html
│   ├── app.js
│   └── assets/
│       ├── products.json
│       └── images/
│           ├── mouse.jpg
│           ├── keyboard.jpg
│           ├── hub.jpg
│           ├── speaker.jpg
│           └── webcam.jpg
│
├── cypress/
│   ├── e2e/
│   │   └── product-tests.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── package.json
├── package-lock.json
└── cypress.config.js

---

## 🚀 How to Run the Project

### **1. Install Dependencies**
npm install

### **2. Start the Local Web Server**
node server.js

Your app runs at:  
👉 http://localhost:4200

---

## 🧪 Cypress End-to-End Tests

### Run Cypress with UI:
npx cypress open

Choose:  
**E2E Testing → Chrome → product-tests.cy.js**

### Run Cypress in Terminal:
npx cypress run --spec "cypress/e2e/product-tests.cy.js"

### ✔ Tests include:
- Displaying 5 products  
- Search filtering  
- Opening the product modal  
- Closing the modal  

All tests pass successfully.

---

## 📤 Submission Package

Submit:
- GitHub Repository URL  
- ZIP file of full project  
- Cypress test video  
- README.md  

---

## 🔗 GitHub Repository
https://github.com/manikantasaladi70/product-catalog-assignment

---

## 🙌 Author
**Manikanta Saladi**

---

# 🎉 Completed!
This README follows all assignment submission guidelines.
