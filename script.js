// ---------- Elementos da página ----------
const grid = document.querySelector(".grid-series");
const campoBusca = document.querySelector(".busca");
const selectGenero = document.querySelector(".select-genero");
const contador = document.querySelector(".contador");

// ---------- Renderizando o grid ----------
function renderizarSeries(lista) {
  grid.innerHTML = "";

  lista.forEach((serie) => {
    grid.innerHTML += `
      <div class="serie">
        <img src="${serie.poster}" alt="${serie.titulo}">
        <div class="info">
          <h2>${serie.titulo}</h2>
          <p>${serie.genero} · ${serie.ano} · ⭐ ${serie.nota}</p>
        </div>
      </div>
    `;
  });

  contador.textContent = `${lista.length} de ${series.length} séries`;
}

// ---------- Aplicando busca + filtro de gênero juntos ----------
function aplicarFiltros() {
  const termo = campoBusca.value.toLowerCase(); // texto digitado na busca, convertido pra minúsculo
  const generoEscolhido = selectGenero.value;   // opção selecionada no <select> de gênero

  const filtradas = series.filter((serie) => {
    // toLowerCase() deixa o título da série minúsculo também,
    // assim "Office" e "office" são considerados iguais na comparação
    
    // includes() verifica se "termo" aparece em algum lugar dentro do título
    const bateBusca = serie.titulo.toLowerCase().includes(termo);

    // "||" é o operador OU: se generoEscolhido for "todos", bateGenero já é true
    // e nem chega a comparar o resto — não filtra por gênero nenhum
    // caso contrário, só é true se o gênero da série for EXATAMENTE igual ao escolhido
    const bateGenero = generoEscolhido === "todos" || serie.genero === generoEscolhido;

    // "&&" é o operador E: só entra no resultado se as duas condições forem true
    return bateBusca && bateGenero;
  });

  renderizarSeries(filtradas);
}

// ---------- Início ----------
renderizarSeries(series);
