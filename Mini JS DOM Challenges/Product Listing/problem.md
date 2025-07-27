# Problem Statements

A large e-commerce site is looking to expand into mobile phone sales. They want to add the ability to search for both phones and accessories using product search and filter features.

The requirements for this feature are:

- Implement a search bar where users can enter a query to search for products.
- Display the search results in a list, showing the product title, price, and category.
- Implement a filter to display products only from a specific category (smartphones, mobile-accessories).
- Allow users to combine search and filter queries (e.g., search for "iPhone" within the "smartphones" category).
- Show a message if no products match the search and filter criteria.

This endpoint can be used to fetch a list of products: [https://dummyjson.com/products/search?q={query](https://dummyjson.com/products/search?q=%7Bquery)}. Each product has the following structure:

{

"products": [

{

"id": 1,

"title": "iPhone X",

"price": 19.99,

"category": "smartphone"

}

]

}
