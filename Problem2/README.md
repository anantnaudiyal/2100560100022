2100560100022

#Problem 2

#Develop a React based Frontend Web Application to display the Top N Products

Develop a responsive React Frontend Web Application that showcases the top N products.

The application should contain two pages: one for presenting all products and another for spotlighting a specific product. Both pages must offer detailed information, including Name, Company, Category, Price, Rating, Discount, and Availability.

The all products page should support filtering based on category, e-commerce company, rating, price range, and availability. Products should be sorted by price, rating, discount, and paginated to facilitate smooth navigation. Sorting and filtering functionalities should be implemented through appropriate API calls to the backend server developed in question 1.

Employ a random assortment of images as product images for both pages.

Your React application should be integrated with the backend APIs that you have developed, and no calls must be made by your React Application to the test server APIs.

Incorporate a CSS library of your choice, such as Material UI (preferred), Tailwind CSS, Bootstrap, etc. Not utilising a CSS library or relying solely on native CSS will result in a lower score.

. Ensure that the Ul prioritises user experience, prominently displaying the key product details

The E-Commerce companies are free to revise the sorting order or the product data at will without any prior notice and at any frequency or time. Your server must accommodate the changes made by these e-commerce companies.


#File Structure

Project2/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── ProductList.js
│   │   ├── ProductCard.js
│   │   └── ProductDetail.js
│   ├── pages/
│   │   ├── AllProductsPage.js
│   │   └── ProductDetailPage.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── App.css
└── ...
