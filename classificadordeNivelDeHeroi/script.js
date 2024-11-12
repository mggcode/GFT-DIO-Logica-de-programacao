function calcularNivel() {
  const heroName = document.getElementById('idName').value.trim();
  const quantXp = parseInt(document.getElementById('quantXp').value.trim(), 10);

  // Validação de entrada
  if (!heroName || isNaN(quantXp) || quantXp < 0) {
      document.getElementById('result').innerText = 'Por favor, insira um nome e uma quantidade válida de XP!';
      return;
  }

  // Definir faixas de XP
  const niveis = [
      { limite: 1000, classe: "Ferro" },
      { limite: 2000, classe: "Bronze" },
      { limite: 6000, classe: "Prata" },
      { limite: 7000, classe: "Ouro" },
      { limite: 8000, classe: "Platina" },
      { limite: 9000, classe: "Ascendente" },
      { limite: 10000, classe: "Imortal" },
      { limite: Infinity, classe: "Radiante" }
  ];

  // Encontrar o nível com base no XP
  let heroClass = '';
  for (const nivel of niveis) {
      if (quantXp <= nivel.limite) {
          heroClass = nivel.classe;
          break;
      }
  }

  // Atualizando o DOM com o resultado
  document.getElementById('result').innerHTML = 
      `<span class="scriptText">${heroName} tem 
      <span id="xpAccent">${quantXp}</span> pontos de experiência <br> e seu nível é
      <span id="classAccent">${heroClass}</span></span>`;
}


document.getElementById("year").textContent = new Date().getFullYear();