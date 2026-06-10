function showToast(message){

    const toast = document.createElement("div");

    toast.innerHTML = message;

    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.background = "#22C55E";
    toast.style.color = "white";
    toast.style.padding = "15px 20px";
    toast.style.borderRadius = "10px";
    toast.style.fontWeight = "bold";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);
}
// =========================
// SIGNUP
// =========================

const signupForm =
document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener(
"submit",
async function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{

const response =
await fetch(
"http://localhost:5000/api/auth/signup",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})
}
);

const data =
await response.json();

if(response.ok){

showToast("🎉 Registration Successful");
window.location.href =
"login.html";

}else{

alert(data.message);

}

}catch(error){

console.log(error);

alert("Server Error");

}

});
}


// =========================
// LOGIN
// =========================

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener(
"submit",
async function(e){

e.preventDefault();

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{

const response =
await fetch(
"http://localhost:5000/api/auth/login",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})
}
);

const data =
await response.json();

if(response.ok){

localStorage.setItem(
"token",
data.token
);

localStorage.setItem(
"user",
JSON.stringify(data.user)
);

showToast("✅ Login Successful");

window.location.href =
"index.html";

}else{

alert(data.message);

}

}catch(error){

console.log(error);

alert(
"Server Error"
);

}

});
}