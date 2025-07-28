// app.js

// 1. Array para armazenar os nomes dos amigos inseridos
let amigos = [];

/**
 * 2. Adiciona um amigo à lista e atualiza a exibição
 */
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (!nome) {
    alert('Por favor, digite um nome válido.');
    return;
  }

  amigos.push(nome);
  input.value = '';
  input.focus();
  atualizarLista();
}

/**
 * 3. Percorre o array e insere cada nome como <li> na UL
 */
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // limpa lista

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

/**
 * 4. Sorteia aleatoriamente um nome e exibe no resultado
 */
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Não há nomes na lista para sortear.');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indice];

  const resultadoEl = document.getElementById('resultado');
  resultadoEl.innerHTML = `<li>🎉 ${nomeSorteado} 🎉</li>`;
}

