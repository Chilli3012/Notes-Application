# Notes Application  

A full-stack Notes Application that allows users to create, edit, and manage their notes efficiently.  

### Live Demo  
Check out the live version of the application:  
[https://note-app-6799.netlify.app/login](https://note-app-6799.netlify.app/login)  

---

## Getting Started  

Follow the steps below to download, set up, and run the project locally.  

### Prerequisites  
- Node.js installed on your machine  
- VS Code or any other code editor  

---

### Step 1: Download the Repository  
1. Click the **Code** button at the top right of the repository page.  
2. Select **Download ZIP**.  
3. Extract the downloaded file. You will find a folder named `Notes-Application-main`.  

---

### Step 2: Open in VS Code  
1. Open VS Code.  
2. Navigate to the extracted folder `Notes-Application-main`.  

---

### Step 3: Set Up the `.env` File  
1. Inside the `backend` folder, create a new file named `.env`.  
2. Add the following environment variables and assign them appropriate values:  
   ```plaintext
   ACCESS_TOKEN_SECRET=<your-secret-key>
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
---

### Step 4: Install Dependencies  
1. Open **two terminals** in VS Code:  
   - In the first terminal, navigate to the `frontend` folder:  
     ```bash
     cd frontend
     ```  
   - In the second terminal, navigate to the `backend` folder:  
     ```bash
     cd backend
     ```  

2. Install the required dependencies in both folders:  
   - In the `frontend` terminal, run:  
     ```bash
     npm install
     ```  
   - In the `backend` terminal, run:  
     ```bash
     npm install
     ```  

---

### Step 5: Start the Application  
1. In the **frontend terminal**, run:  
   ```bash
   npm run dev
   ```
   This will start the frontend development server.
   
2. In the backend terminal, run:
   ```bash
   npm start
   ```
   This will start the backend server.
   
---

### Step 6: Access the Application
1. Look for the URL displayed in the frontend terminal (e.g., http://localhost:5173).
2. Append /login to the URL and open it in your browser. The final URL should look like this:
   "http://localhost:5173/login"

---

### Technologies Used
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB
- Hosting: Netlify, Vercel


