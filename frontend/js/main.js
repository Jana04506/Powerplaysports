// PRELOADER

window.addEventListener("load", () => {

    const preloader =
    document.getElementById("preloader");

    if(preloader){

        preloader.style.display = "none";

    }

});

// TOAST NOTIFICATION

function showToast(message){

    let toast =
    document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    },100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        },400);

    },2500);

}