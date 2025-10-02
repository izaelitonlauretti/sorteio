let numeros = []; // aqui vão ficar os valores

function gerarLista() {
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  numeros = []; // resetar sempre que definir novo intervalo

  for (let i = min; i <= max; i++) {
    numeros.push(i);
  }

  document.getElementById("resultado").innerText = 
    ` ${numeros.length}`;
}

function sortearNumero() {
  if (numeros.length === 0) {
    document.getElementById("resultado").innerText = 
      "Todos os números já foram sorteados!";
    return;
  }

  const indice = Math.floor(Math.random() * numeros.length);
  const numeroSorteado = numeros[indice];

  numeros.splice(indice, 1); // remove da lista

  document.getElementById("resultado").innerText = 
    ` ${numeroSorteado}`;
}
