fetch("https://api.github.com/users/Vitonsodev")

let menu = document.getElementById("menuNavegacao")
let trilho = document.getElementById("trilho");
let body = document.querySelector("body")
let iconeTema = document.getElementById("iconeTema")

trilho.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (document.body.classList.contains("dark")){
        iconeTema.src = "img/lua.png";
    } else {
        iconeTema.src = "img/sol.png";
    }
});






