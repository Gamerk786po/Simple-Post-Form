# Simple Post Form

## 📌 Overview
This is a simple **Node.js** form that allows users to submit their **Username, Email, and Password**, which are then stored in a **MongoDB** database using the **MongoDB Node.js driver**.

## 🚀 Features
- ✅ User input fields: **Username, Email, and Password**
- ✅ Stores data securely in **MongoDB**
- ✅ Uses **MongoDB Node.js driver** for database interaction
- ✅ Basic error handling for missing or invalid inputs

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via MongoDB Node.js driver)
- **Other**: Body-parser (or built-in middleware), Dotenv (for environment variables)

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd simple-post-form
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Set Up Environment Variables
Create a .env file in the root folder and add:

plaintext
Copy
Edit
MONGO_URI=mongodb://your-db-url
4️⃣ Run the Server
For production:

bash
Copy
Edit
npm start
For development (if using nodemon):

bash
Copy
Edit
npm run dev
📩 API Endpoint
POST /submit
Request Body (JSON):

json
Copy
Edit
{
  "username": "JohnDoe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
Response:

✅ 201 Created if successful

❌ 400 Bad Request if missing fields
