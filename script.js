const caracteristicas = [
    "Componentes reutilizáveis",
    "Virtual DOM",
    "Fluxo de dados unidirecional",
    "Alta performance",
    "Comunidade ativa"
];

document
    .getElementById("ver-caracteristicas")
    .addEventListener("click", () => {
        caracteristicas.forEach(item => alert(item));
    });

const botaoCta = document.getElementById('botao-cta');
botaoCta.addEventListener('click', () => {
    alert('Vamos começar a usar React! 🚀');
});