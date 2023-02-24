 /*

6 - Analise de preços da lista de compras

Escreva um algoritmo que irá receber um array de produtos e retorne uma string no formato da saída que contem:

* O produto com maior preço;
* O preço do produto;
* A média do preços dos produtos.

Por exemplo:
---------------------------------------------------------------------------------------------------
Entrada:
[
  { name: 'lápis', price: 2 },
  { name: 'borracha', price: 4 },
  { name: 'caneta', price: 5 },
  { name: 'régua', price: 6 },
  { name: 'apontador', price: 3 },
  { name: 'teclado gamer', price: 180 },
  { name: 'mochila', price: 33 },
  { name: 'fone de ouvido', price: 57 },
  { name: 'mousepad', price: 35 },
]

Saída:
"O produto mais caro é teclado gamer e custa: R$ 180, a média de preços dos produtos é de: R$36.11."
----------------------------------------------------------------------------------------------------

*/
 
 const productsList = [
     { name: 'lápis', price: 2 },
     { name: 'borracha', price: 4 },
     { name: 'caneta', price: 5 },
     { name: 'régua', price: 6 },
     { name: 'apontador', price: 3 },
     { name: 'teclado gamer', price: 180 },
     { name: 'mochila', price: 33 },
     { name: 'fone de ouvido', price: 57 },
     { name: 'mousepad', price: 35 },
 ]

function productAnalysis(products){ // corrigir nome
     let maxValue = 0;
     let sum = 0;
     let productName = ''
      products.forEach(item => {
          if (item.price > maxValue) {
              maxValue = item.price;
              productName = item.name;
          }
          sum += item.price
      });
     return `O produto mais caro é ${productName} e custa: R$ ${maxValue}, a média de preços dos produtos é de: R$${(sum/products.length).toFixed(2)}.`;
}
 
productAnalysis(productsList);

module.exports = productAnalysis;

