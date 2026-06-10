const container = document.getElementById("productContainer");

let allProducts = [];

fetch("http://localhost:5000/api/products")
  .then((res) => res.json())
  .then((data) => {
    allProducts = data;
    displayProducts(data);
  })
  .catch((err) => {
    console.log("Error fetching products:", err);
  });

function displayProducts(products) {
  container.innerHTML = "";

  products.forEach((product) => {
    let imagePath = "images/cricketbat.jpg";

    // BATS
    // BATS

if (product.name === "MRF Genius Grand") {
    imagePath = "images/bat2.jpg";
}

if (product.name === "SS Ton Reserve") {
    imagePath = "images/bat1.jpg";
}

if (product.name === "GM Diamond") {
    imagePath = "images/bat3.jpg";
}


// BALLS

if (product.name === "SG Test Ball") {
    imagePath = "images/sgball.jpg";
}

if (product.name === "Kookaburra Ball") {
    imagePath = "images/ball1.jpg";
}


// SHOES

if (product.name === "Puma 22 Yards") {
    imagePath = "images/shoe1.jpg";
}

if (product.name === "Adidas Howzat") {
    imagePath = "images/shoe2.jpg";
}


// GLOVES

if (product.name === "SS Gloves") {
    imagePath = "images/gloves1.jpg";
}


// HELMET

if (product.name === "Shrey Helmet") {
    imagePath = "images/helmet.jpg";
}


// STUMPS

if (product.name === "Cricket Stumps") {
    imagePath = "images/stumps.jpg";
}


// JERSEY

if (product.name === "Team India Jersey") {
    imagePath = "images/jersey.jpg";
}


// TRAINING KIT

if (product.name === "Training Kit") {
    imagePath = "images/kit.jpg";
}
    container.innerHTML += `
      <div class="product-card">

        <img src="${imagePath}" alt="${product.name}">

        <h3>${product.name}</h3>

        <p><strong>Category:</strong> ${product.category}</p>

        <p><strong>Price:</strong> ₹${product.price}</p>

       <button onclick='addToCart(${JSON.stringify(product)})'>
            Add To Cart
        </button>

      </div>
    `;
  });
}

// SEARCH FUNCTION

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(value)
    );

    displayProducts(filteredProducts);
  });
}

// ADD TO CART
function addToCart(product){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
    name: product.name,
    price: product.price
});

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

showToast(
"🛒 " + product.name +
" Added To Cart"
);

}
function showToast(message){

const toast =
document.createElement("div");

toast.innerText = message;

toast.style.position = "fixed";
toast.style.top = "20px";
toast.style.right = "20px";
toast.style.background = "#22C55E";
toast.style.color = "white";
toast.style.padding = "15px 20px";
toast.style.borderRadius = "10px";
toast.style.zIndex = "9999";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},2000);

}