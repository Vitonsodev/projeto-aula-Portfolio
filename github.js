const usuario = "Vitonsodev";

const projetos = {

    "Projeto-Mario": {
        imagem: "img/landingPageMarioPrint.png",
        demo: "https://vitonsodev.github.io/Projeto-Mario/"
    },

    "projeto-the-last": {
        imagem: "img/landingPageTheLastPrint.png",
        demo: "https://vitonsodev.github.io/projeto-the-last/"
    },

    "devlinks": {
        imagem: "img/portfolioDevPrint.png",
        demo: "https://vitonsodev.github.io/devlinks/"
    },

    "ExerciciosJS": {
        imagem: "img/java-script.png",
        demo: "https://vitonsodev.github.io/ExerciciosJS/"
    }

};

const cores = {

    HTML: "#E34F26",

    CSS: "#1572B6",

    JavaScript: "#F7DF1E",

    TypeScript: "#3178C6",

    React: "#61DAFB",

    Kotlin: "#7F52FF",

    Java: "#ED8B00",

    Python: "#3776AB",

    C: "#A8B9CC",

    "C++": "#00599C"

};

fetch(`https://api.github.com/users/${usuario}/repos`)
.then(resposta => resposta.json())
.then(repositorios => {

    console.log(repositorios);

    const container = document.getElementById("repositorios");

    if (!Array.isArray(repositorios)) {
    console.log(repositorios);
    return;
}

    repositorios.forEach(repo => {

        // Mostra apenas os projetos cadastrados
        if (!projetos[repo.name]) {
            return;
        }
        const projeto = projetos[repo.name];

        const imagem = projeto.imagem;
        const demo = projeto.demo;

        // Busca as linguagens desse repositório
        fetch(repo.languages_url)

        .then(resposta => resposta.json())

        .then(languages => {
            let total = 0;

            for (let linguagem in languages) {
                total += languages[linguagem];
            }

            // Monta o HTML das porcentagens
            // Monta o HTML das porcentagens
let linguagensHTML = "";

for (const linguagem in languages) {

    const cor = cores[linguagem] || "#666666";

    const porcentagem = (
        languages[linguagem] / total * 100
    ).toFixed(1);

    linguagensHTML += `

    <div class="linguagem">

        <div class="linguagemInfo">

            <div class="nomeLinguagem">

                <span
                    class="bolinha"
                    style="background:${cor};">
                </span>

                <span>${linguagem}</span>

            </div>

            <span>${porcentagem}%</span>

        </div>

        <div class="barra">

            <div
                class="progresso"
                style="width:${porcentagem}%; background:${cor};">
            </div>

        </div>

    </div>

    `;
}

            const card = document.createElement("div");
            card.classList.add("cardRepositorio");
            card.innerHTML = `
                <img src="${imagem}" class="imagemProjeto">
                <h3>${repo.name}</h3>
                ${linguagensHTML}
                <p>⭐ ${repo.stargazers_count}</p>
                <div class="botoes">
                    <a href="${repo.html_url}" target="_blank">
                        Código
                    </a>
                    ${
                        demo
                        ? `<a href="${demo}" target="_blank">Demo</a>`
                        : ""
                    }
                </div>
            `;
            container.appendChild(card);
        });
    });
})
.catch(erro => console.log(erro));