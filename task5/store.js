// 1. API Integration.
let apiLink = "https://fakestoreapi.com/products/";

let one = document.querySelector(".one");
let inpt = document.querySelector(".inpt");
let categoryFilter = document.querySelector(".categoryFilter");
let sortPrice = document.querySelector(".sortPrice");

let allProducts = [];  // to store all the products here.

one.innerHTML = "<h1>Loading...</h1>";   // This is for Loading State.

function displayProducts(data){
    one.innerHTML = "";

    data.forEach((c) => {
        let item = document.createElement("div");

        // Dynamic UI Rendering.
        item.innerHTML = `<h1>${c.title.slice(0,50)}...</h1> 
        <img src="${c.image}" alt="${c.category}"/> 
        <h3>Price - $${c.price}</h3> 
        <p>${c.description.slice(0,60)}...</p>  
        <button class="vBtn">View More</button>
        <button class="cartBtn">Add To Cart</button>` ;

        let button = item.querySelector(".vBtn");
        let cartBtn = item.querySelector(".cartBtn");

        // View More Button alert.
        button.addEventListener("click", () => {
            alert(`Title : ${c.title} 

Category : ${c.category}

Price : $${c.price} 

Description : ${c.description}`);

        });

        // Add to Cart.
        cartBtn.addEventListener("click", () => {
            let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push(c);

            localStorage.setItem("cart", JSON.stringify(cartItems));
            alert("Product Added To Cart");
        });

        one.append(item);
    });
}


fetch(apiLink)
.then((data) => {
    return data.json();
})
.then((objectData) => {
    allProducts = objectData;

    displayProducts(allProducts);
})
.catch((error) => {
    console.log(error);

    one.innerHTML = `<h1 style="color:red;">
                        Failed to load data
                     </h1>`;
});


// search Filter products by title.
inpt.addEventListener("keyup", () => {
    let searchValue = inpt.value.toLowerCase();

    let filteredProducts = allProducts.filter((product) => {
        return product.title.toLowerCase().includes(searchValue);
    });

    displayProducts(filteredProducts);
});

// Filter products by category
categoryFilter.addEventListener("change", () => {
    let selectedCategory = categoryFilter.value;

    if(selectedCategory === "all"){
        displayProducts(allProducts);
    }
    else{
        let filteredCategory = allProducts.filter((product) => {
            return product.category === selectedCategory;
        });
        displayProducts(filteredCategory);
    }
});


// Sort by price:
sortPrice.addEventListener("change", () => {
    let sortedProducts = [...allProducts];

    if(sortPrice.value === "low"){
        sortedProducts.sort((a,b) => a.price - b.price);
    }
    else if(sortPrice.value === "high"){
        sortedProducts.sort((a,b) => b.price - a.price);
    }

    displayProducts(sortedProducts);
});

