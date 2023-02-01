// Ponto 1 Crie um irmão para elementoOndeVoceEsta
const elementoPai = document.querySelector("#pai");
const create = document.createElement("section");
create.id = "irmaoElementoOndeVoceEsta";
elementoPai.appendChild(create);

// Ponto 2 Crie um filho para elementoOndeVoceEsta
const elementoOndeVoceEstaPai = document.querySelector('#elementoOndeVoceEsta')
const createElement  = document.createElement('section')
createElement.id = 'FilhoDoElementoOndeVoceEsta'
elementoOndeVoceEstaPai.appendChild(createElement)


// Ponto 3 Crie um filho para primeiroFilhoDoFilho
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
const primeiroFilhoDoFilho = elementoOndeVoceEstaPai.firstElementChild
const createElement2 = document.createElement('section')
createElement2.id = 'filhoDoPrimeiroFilhoDoFilho'
primeiroFilhoDoFilho.appendChild(createElement2)

// Ponto 4 A partir desse filho criado, acesse terceiroFilho

primeiroFilhoDoFilho.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling
