function naoAprovarItem(itemId) {
  const observacaoElem = document.getElementById(`observacao-${itemId}`);
  const itemElem = document.getElementById(`item-${itemId}`);

  observacaoElem.classList.remove('aprovado');
  observacaoElem.classList.add('nao-aprovado');
  itemElem.classList.remove('aprovado');
  itemElem.classList.add('nao-aprovado');

  abrirFecharAbaObservacao(observacaoElem, 'block');
  console.log("Item não aprovado:", itemId);
}

function abrirFecharAbaObservacao(element, displayValue) {
  element.style.display = displayValue;
}

function tirarFoto() {
  console.log("Foto tirada!");
}

function salvarObservacao(itemId) {
  console.log(`Observação para ${itemId} salva.`);
  const observacaoElem = document.getElementById(`observacao-${itemId}`);
  abrirFecharAbaObservacao(observacaoElem, 'none');
}

function salvarChecklist() {
  console.log("Checklist salvo.");
  document.body.innerHTML = '';
  document.getElementById('message-container').style.display = 'block';
}
