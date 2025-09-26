# Pets Heaven 🐾

Welcome to Pets Heaven, a full-stack MERN application dedicated to connecting pets in need with loving homes. This platform allows users to list pets for adoption, browse available pets, and support the cause through donations. It also features a complete admin dashboard for seamless management of the platform's content and users.

**Live Demo:** [https://petsheaven-frontend.onrender.com/]

## ✨ Key Features

### For Users
* **Pet Listings:** Browse a comprehensive list of pets available for adoption.
* **Advanced Search & Filtering:** Easily find the perfect pet by searching and filtering based on breed, age, location, and more.
* **Direct Contact:** Connect directly with pet owners to inquire and proceed with the adoption process.
* **Donation System:** Support the cause by making a donation. A public donor list acknowledges and appreciates our supporters.
* **Volunteer & Contact:** A dedicated form for users to get in touch about volunteering opportunities or any other inquiries.
* **User Authentication:** Secure user registration and login system using JWT (JSON Web Tokens).

### For Admins (Secure Admin Panel)
* **User Management:** View and manage all registered users on the platform.
* **Pet Management:** Oversee all pet listings, with the ability to view or remove them.
* **Donation Management:** Full CRUD (Create, Read, Update, Delete) functionality for all donations.
* **Adoption Management:** Track and manage the adoption records within the system.

## 📸 Screenshots

| Homepage                                         | Pets Listing Page                               |
| ------------------------------------------------ | ----------------------------------------------- |
| ![Pets Heaven Home Page](https://github.com/prohansai/PetsHeaven/blob/master/screenshots/Screenshot%202025-09-26%20130107.png?raw=true)         | ![Pets Listing Page](https://github.com/prohansai/PetsHeaven/blob/master/screenshots/Screenshot%202025-09-26%20130149.png?raw=true) |
| **Donation Page** | **Admin Dashboard** |
| ![Donation Page](https://github.com/prohansai/PetsHeaven/blob/master/screenshots/Screenshot%202025-09-26%20130228.png?raw=true) | ![Admin Dashboard](https://github.com/prohansai/PetsHeaven/blob/master/screenshots/Screenshot%202025-09-26%20142355.png?raw=true)  |


## 🛠️ Tech Stack

This project is built using the MERN stack and leverages several modern technologies:

* **Frontend:** React, CSS (or your specific styling library like Tailwind CSS, etc.)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JSON Web Tokens (JWT) & bcrypt for password hashing
* **Image Storage:** Cloudinary for cloud-based image uploads and management
* **Deployment:** Render

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

* npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/prohansai/PetsHeaven.git](https://github.com/prohansai/PetsHeaven.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd PetsHeaven
    ```
3.  **Install backend dependencies:**
    ```sh
    cd backend
    npm install
    ```
4.  **Install frontend dependencies:**
    ```sh
    cd ../frontend
    npm install
    ```

### Environment Variables

You will need to create a `.env` file in the **`backend`** directory. This file will store your secret keys and database connection strings.

```env
# MongoDB Connection String
MONGO_URI=your_mongodb_connection_string

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server Port
PORT=5000
```
### Running the Application

1.  **Start the backend server** (from the `backend` directory):
    ```sh
    npm start
    ```
2.  **Start the frontend development server** (from the `frontend` directory):
    ```sh
    npm start
    ```

Your application should now be running locally. The backend will be on `http://localhost:5000` and the frontend on `http://localhost:3000`.
