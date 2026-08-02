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
const perfilGithub = document.getElementById("perfilGithub");

function buscarUsuario(){
    const usuario = inputUsuario.value;
    let nomeProjetos = repositorio.name;

    console.log(usuario);

    fetch(`https://api.github.com/users/${usuario}`)
    .then(resposta => resposta.json())
    .then(dados=>{
        console.log(dados);
        perfilGithub.innerHTML = `
        <div class="perfil">
        <h2>${dados.name}</h2>
        <img src="${dados.avatar_url}" class="foto-perfil"alt="Foto de perfil do usuário">
        <p>Login: ${dados.login}</p>
        <p>Bio: ${dados.bio} </p>  
        <p>Repositórios: ${dados.public_repos}</p>
        <p>Seguidores: ${dados.followers}</p>
        </div>`;
    });

    fetch(`https://api.github.com/users/${usuario}/repos`)
    .then(resposta => resposta.json())
    .then(repos =>{
        console.log(repos);
        repos.forEach(repositorio => {
            perfilGithub.innerHTML = `${repositorio.name}`;
        })
    

    });

};





