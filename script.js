fetch("api.github.com/users/Vitonsodev")


console.log(fetch)

let trilho = document.getElementById("trilho");
let modoClaro = document.getElementById("modoClaro")
let body = document.querySelector("body")

trilho.addEventListener("click", () => {
    trilho.classList.toggle("dark");
    body.classList.toggle("dark");
});





