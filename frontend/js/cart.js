const cartContainer =
document.getElementById("cartContainer");
console.log("Cart Data:", localStorage.getItem("cart"));
let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

renderCart();

function renderCart(){

if(cart.length === 0){

cartContainer.innerHTML = `

<div class="empty-cart">

🛒 Your cart is empty

<br><br>

<a href="products.html"
class="shop-btn">

Continue Shopping

</a>

</div>

`;

return;

}

let total = 0;

cartContainer.innerHTML = "";

cart.forEach((item,index)=>{

total += item.price;

cartContainer.innerHTML += `

<div class="cart-item">

<div>

<h3>${item.name}</h3>

<p>₹${item.price}</p>

</div>

<button
class="remove-btn"
onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

cartContainer.innerHTML += `

<div class="total-section">

<h2>Total : ₹${total}</h2>

<button
class="checkout-btn"
onclick="checkout()">

Proceed To Checkout

</button>

<button
class="clear-btn"
onclick="clearCart()">

Clear Cart

</button>

</div>

`;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

}

function clearCart(){

localStorage.removeItem("cart");

cart = [];

renderCart();

}

function checkout(){

showToast(
"🎉 Order Placed Successfully"
);

localStorage.removeItem("cart");

cart = [];

renderCart();

}