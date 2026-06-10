const userSection =
document.getElementById("userSection");

const user =
JSON.parse(localStorage.getItem("user"));

if(user){

userSection.innerHTML = `

<a href="#">
👤 ${user.name}
</a>

<a
href="#"
onclick="logout()"
style="margin-left:15px;">

Logout

</a>

`;

}else{

userSection.innerHTML = `

<a href="login.html">
Login
</a>

`;

}

function logout(){

localStorage.removeItem("token");

localStorage.removeItem("user");

showToast(
"👋 Logged Out Successfully"
);

setTimeout(()=>{

window.location.href =
"login.html";

},1500);

}