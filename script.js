// ---------- Elementos da página ----------
const grid = document.querySelector(".grid-atores");
const campoBusca = document.querySelector(".busca");
const selectPais = document.querySelector(".select-pais");
const contador = document.querySelector(".contador");

// ---------- Renderizando o grid ----------
function renderizardados(lista) {
  grid.innerHTML = "";

  lista.forEach((ator) => {
    /* ator.nascimento = ator.nascimento.split("-");
    ator.nascimento = ator.nascimento[2] + "/" + ator.nascimento[1] + "/" + ator.nascimento[0] // IBM me contrata pfv */
    grid.innerHTML += `
      <div class="ator">
        <img src="${ator.foto}" alt="${ator.nome}">
        <div class="info">
          <h2>${ator.nome}</h2>
          <p>País: ${ator.pais}</p>
          <p>Nasc: ${ator.nascimento}</p>
        </div>
      </div>
    `;
  });

  contador.textContent = `${lista.length} de ${atores.length} atores`;
}

// ---------- Aplicando busca + filtro de gênero juntos ----------
function aplicarFiltros() {
  const termo = campoBusca.value.toLowerCase(); // texto digitado na busca, convertido pra minúsculo
  const paisEscolhido = selectPais.value;   // opção selecionada no <select> de gênero

  const filtradas = atores.filter((ator) => {
    // toLowerCase() deixa o título da série minúsculo também,
    // assim "Office" e "office" são considerados iguais na comparação

    // includes() verifica se "termo" aparece em algum lugar dentro do título
    const bateBusca = ator.nome.toLowerCase().includes(termo);

    // "||" é o operador OU: se paisEscolhido for "todos", bateGenero já é true
    // e nem chega a comparar o resto — não filtra por gênero nenhum
    // caso contrário, só é true se o gênero da série for EXATAMENTE igual ao escolhido
    const batePais = paisEscolhido === "todos" || ator.pais === paisEscolhido;

    // "&&" é o operador E: só entra no resultado se as duas condições forem true
    return bateBusca && batePais;
  });

  renderizardados(filtradas);
}

// ---------- Início ----------
atores.forEach((ator) => {
  ator.nascimento = ator.nascimento.split("-");
  ator.nascimento = ator.nascimento[2] + "/" + ator.nascimento[1] + "/" + ator.nascimento[0] // IBM me contrata pfv
});
renderizardados(atores);