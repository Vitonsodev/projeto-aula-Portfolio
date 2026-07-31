fetch('https://api.github.com/users/${usuario}')
    .then(resposta => resposta.json())
    .then(dados=>{

    });

let menu = document.getElementById("menuNavegacao") //=====================================//
let trilho = document.getElementById("trilho");      // Variáveis para tema claro e escuro//
let body = document.querySelector("body")
let iconeTema = document.getElementById("iconeTema")//====================================//

trilho.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (document.body.classList.contains("dark")){
        iconeTema.src = "img/lua.png";
    } else {
        iconeTema.src = "img/sol.png";
    }
});

const inputUsuario = document.getElementById("nomeUsuario");
const pefilGithub = document.getElementById("perfilGithub");

function buscarUsuario(){
    const usuario = inputUsuario.value;

    console.log(usuario)

}




