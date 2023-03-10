const firstLi = document.getElementById('first-li');
const input = document.getElementById('input');
const tech = document.querySelector('.tech')


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - ans: por que esta utilizando um translate de -20px no eixo y

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const allLi = document.querySelectorAll('li')
allLi.forEach(element => element.addEventListener(('click'), (event) => {
    allLi.forEach(item => item.classList.remove('tech'))
    event.target.classList.add('tech')
}))


// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', (event) => {
    const textValue = event.target.value
    tech.innerText = textValue
})


// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

const top3 = firstLi.parentElement.previousElementSibling


// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

top3.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'purple'
});
top3.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = ''
});

// Segue abaixo um exemplo do uso de event.target


const resetText = (event) => {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.