// Ponto 1 Acesse o elemento elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// Ponto 2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = elementoOndeVoceEsta.parentNode
pai.style.color = 'red';

// Ponto 3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele.

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild
primeiroFilhoDoFilho.innerText = 'some text'

// Ponto 4 Acesse o primeiroFilho a partir de pai.

const primeiroFilho = pai.firstElementChild
console.log(primeiroFilho);

// Ponto 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
const primeiroFi = elementoOndeVoceEsta.previousElementSibling
console.log(primeiroFi);

// Ponto 6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

const acessarAtencao = elementoOndeVoceEsta.nextSibling
console.log(acessarAtencao);

// Ponto 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling
console.log(terceiroFilho);

// Ponto 8 Agora acesse o terceiroFilho a partir de pai
const terceiroFilhoPeloPai = pai.lastElementChild.previousElementSibling
console.log(terceiroFilhoPeloPai);