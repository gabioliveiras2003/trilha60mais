function mostrarProximaEtapa() {
    // Pega o elemento da etapa seguinte
    const etapa = document.getElementById("etapa-seguinte");
    const botao = document.getElementById("btn-comecar");

    // Mostra a seção oculta
    etapa.style.display = "block";

    // Esconde o botão inicial para focar no conteúdo que apareceu
    botao.style.display = "none";

    // Rrola a página suavemente até o conteúdo novo
    etapa.scrollIntoView({ behavior: 'smooth' });
}
