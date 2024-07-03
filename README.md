FOOD DELIVERY APP

PROJECT OVERVIEW
The Food Delivery App is designed to provide users with a seamless and convenient way to order their favorite meals. The app includes features like user authentication, food listing, cart management, and one-click order confirmation, all supported by robust backend functionality to ensure a smooth user experience.

KEY FEATURES
1. User Authentication
User Registration: New users can create an account by providing their personal information and setting up a secure password.
Secure Login: Existing users can log in using their credentials, ensuring that their data remains private and secure.

2. Food Listing
Curated List: The app displays a curated list of food items, making it easy for users to browse and select their desired meals.
Filter and Search: Users can filter food items based on categories, cuisine, and preferences or use the search function to find specific dishes.

3. Cart Management
Add to Cart: Users can add selected food items to their cart with a simple click.
View Cart: Users can view the contents of their cart, including item details, quantities, and prices.

4. One-Click Order Confirmation
Easy Checkout: Users can confirm their orders with a single click, streamlining the checkout process.
Order Summary: A summary of the order, including total cost and delivery details, is displayed before final confirmation.

5. Backend Functionality
User Data Management: The backend securely handles user data, including registration, login, and profile management.
Order Processing: The backend processes orders, updates inventory, and communicates with the frontend to ensure real-time updates.
Database Integration: Seamless integration with a database ensures that user information, food listings, and order details are consistently maintained.

6. Commands to run the project through VS Code
 For Backend
    cd food_delivery_backend
    npm start

 For Frontend
    cd food_delivery_frontend
    npm start

7. Dependencies
    In Bacakend.
        "bcrypt": "^5.1.1",
        "body-parser": "^1.20.2",
        "cookie-parser": "~1.4.4",
        "cors": "^2.8.5",
        "debug": "~2.6.9",
        "express": "~4.16.1",
        "express-session": "^1.18.0",
        "mongoose": "^8.3.0",
        "mongoose-unique-validator": "^5.0.0",
        "morgan": "~1.9.1",
        "nodemon": "^3.1.0"

    In Frontend.
        @testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "axios": "^1.6.8",
        "react": "^18.2.0",
        "react-bootstrap": "^2.10.2",
        "react-dom": "^18.2.0",
        "react-grid-system": "^8.2.0",
        "react-router-dom": "^6.22.3",
        "react-scripts": "5.0.1",
        "react-slick": "^0.30.2",
        "react-use-cart": "^1.13.0",
        "web-vitals": "^2.1.4"
        
TECHNOLOGIES USED
Frontend
React: For building a dynamic and responsive user interface.
Redux: For state management to ensure a smooth and consistent user experience.

Backend
Node.js: For handling server-side logic and API endpoints.
Express: A robust framework for building the backend infrastructure.
MongoDB: A NoSQL database for storing user data, food listings, and order details.
Authentication

Project Repository
Check out the project on GitHub: Rohitmaurya29/food_delivery_app

Conclusion
The Food Delivery App aims to provide a hassle-free and enjoyable ordering experience for users. By leveraging modern technologies and implementing essential features, the app ensures that users can easily find, select, and order their favorite meals with confidence and convenience.
