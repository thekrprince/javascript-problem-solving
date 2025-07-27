const inputBox = document.getElementById("search-input");
const mainlist = document.getElementById("items-list");
const selectCategory = document.getElementById("select-category");

let selectedCategoryVal;

let queriedProducts;
let filteredProducts;

// Fetch Function
async function fetchProducts(query) {
    const data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const json = await data.json();
    queriedProducts = json?.products;

    if (selectedCategoryVal) {
        filteredProducts = queriedProducts.filter(qp => qp.category === selectedCategoryVal);
        productMapping(filteredProducts);
    } else {
        productMapping(queriedProducts);
    }
}

// Product mapping
function productMapping(products) {
    console.log("queriedProducts", queriedProducts);
    console.log("filteredProducts", filteredProducts);
    console.log("selectedCategory", selectedCategoryVal);
    mainlist.innerHTML = "";
    products.forEach(qp => {
        const list = document.createElement("li");
        list.classList.add("product-list");
        list.innerHTML = `Title: ${qp.title} | Price: ${qp.price} | Category: ${qp.category}`;
        mainlist.append(list);
    });
}

// Debounce
function debounce(fn, delay = 300) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    }
}

// Input change function
function inputChange(e) {
    fetchProducts(e.target.value)
}

// Listeners
inputBox.addEventListener("input", debounce(inputChange));

selectCategory.addEventListener("change", function (e) {
    selectedCategoryVal = e.target.value;
    if (selectedCategoryVal) {
        filteredProducts = queriedProducts.filter(qp => qp.category === selectedCategoryVal);
        productMapping(filteredProducts);
    } else {
        productMapping(queriedProducts)
    }
});