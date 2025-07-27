const inputBox = document.getElementById("search-input");
const mainlist = document.getElementById("items-list");

async function fetchProducts(query) {
    mainlist.innerHTML = "";
    const data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const json = await data.json();
    let queriedProducts = json?.products;
    queriedProducts.forEach(qp => {
        const list = document.createElement("li");
        list.classList.add("product-list");
        list.innerHTML = `Title: ${qp.title} | Price: ${qp.price} | Category: ${qp.category}`;
        mainlist.append(list);
    })
}

function debounce(fn, delay = 300) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    }
}

function inputChange(e) {
    fetchProducts(e.target.value)
}

inputBox.addEventListener("input", debounce(inputChange))