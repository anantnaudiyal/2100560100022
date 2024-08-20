# 2100560100022
#Full Stack
#Problem 1
#Develop a Top Products HTTP Microservice

As a developer, you've been granted access to the APIs of five distinct e-commerce companies. Utilising these APIs, your task is to create a public API that showcases the top N products within a specified category and price range from these companies so that your users can compare the offerings of different e-commerce companies.

While ordinarily, registration with each e-commerce company is required separately for your startup, the test server simplifies this process by allowing you to register through a single api for all companies simultaneously.

At no point in time should your users be asked to register to access the APIs that you shall develop

The server's API returns product data for a given category and company, which may be unordered and subject to change by the respective e-commerce companies.

Create a GET REST API "/categories/categoryname/products" enabling users to retrieve the top 'n' products within a category.

The REST API must enable your users to specify 'n' (number of products) as a query parameter.

If "n" exceeds 10, your api should enforce pagination requiring the addition of a "page" query parameter where each page shall utmost contain "n" products.

Ensure you generate a custom unique identifier for each product that forms a part of the response.

Furthermore, users can pass additional query parameters to sort results based on rating, price, company,

or discount in ascending or descending order. Your server must also expose a GET REST API "/categories/:categoryname/products/:productid" to return details of a specific product. The ID passed to this API should match the ID returned in the previous API.

Each API call made by your server to the Test Server incurs a cost and will negatively impact the score you

are awarded in this test. Your users should receive a timely, performant and accurate response. Therefore, any attempt to minimise

costs shouldn't be at the expense of your user's experience or by inaccurately providing stale product data.



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
