// Secunda parte sobre "O que aprender de Javascript antes de aprender React"

// MÉTODOS DE ARRAY => trabalhando com arrays
// map()
const numbers = [1, 2, 3, 4, 5, 6]

numbers.map(el => {
   if(el % 2 === 0) {
    console.log(`${el} é número par`)
   }else{
    console.log(`${el} é número impar`)
   }
})

// filter()
// o método filter() não pode alterar um array, ele apenas filtra, ou corta o array dentro da condição colocada
const filtrandoArray = numbers.filter(element => element % 2 === 0)
.map(element => element * 10)

console.log(filtrandoArray)

// every()
// retorna um boolean (true ou false) => se todos os items forem apenas de um tipo
const letrasArray = ['a', 'b', 'c', 'd', 'e', 'f']

const todoItemSaoStrings = letrasArray.every(letter => typeof letter === 'string')
console.log(todoItemSaoStrings)

// some()
// o some não verifica se todos, mas alguns ou pelo menos um item é do tipo exigido, para retornar um boolean (true ou false)
const algumItemNumber = letrasArray.some(item => typeof item === 'number')
console.log(algumItemNumber)

// MÉTODO => find() - Ele serve para que eu possa encontrar um item dentro do array
// exemplo: quero encontrar um número par

const numeros = [1, 2, 3, 4, 5, 6]

const pares = numeros.find(par => par % 2 === 0)
console.log(`Encontrei meu primero número par que é ${pares}`)
// neste exemplo com find, mesmo tendo outros numbers par, o find retorna o primeiro resultado que o satisfaça
// caso não tenha um resultado que o satisfaça, o retorno é underfined

// findIndex() => igual ao find(), porém retorna o índice do primeiro resultado encontrado
const indice = numeros.findIndex(par => par % 2 === 0)
console.log(`A posição é ${indice}`)

// MÉTODO reduce() => serve para criar uma nova estrutura de dados
// sintax do reduce(): 
// * como os outros ele inicia com uma função () => {}
// * em seguida recebe um segundo parâmetro que é: o valor inicial da nova estrutura do array modificada pelo reduce()
const soma = numeros.reduce((acumulator, valor) => {
   console.log(`${acumulator} + ${valor}`)

   return acumulator + valor

}, 0) // => aqui estou iniciando a nova estrutura com valor inicial 0
console.log(soma)

// verificação importante
// ? => se existir, retorna dois tipos de resultados
// ?? => se não existir, verifica apenas um tipo de resultado

// TAMPLATE LITERALS
const myName = undefined
const message = `Bem vindo, ${myName ? myName : 'visitante'}`

console.log(message)

// Aprendendo sobre Promisse
// Primeiro exemplo simples
const somaNumeros = (a, b) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         reject(a + b)
      }, 8000)
   })
}

somaNumeros(15, 7).then((soma) => {
  console.log(soma)
}).catch((err) => {
   console.error(err)
})

// const api = fetch('https://api.github.com/users/moutinhofuturedev')
const app = document.getElementById('app')

//Exemplo que da certo
// api.then(response => {
//    response.json()
//    .then(body => {
//       app.textContent = JSON.stringify(body)
//    })
// })

// Agora usando umexemplo do mundo real
//Escrevendo um código melhor usando a sintaxe do async await ( usando try e catch )
async function mostraDadosGitHub() {
   try {
      const response = await fetch('https://api.github.com/users/moutinhofuturedev')
      const body = await response.json()

      return app.textContent = JSON.stringify(body.bio)

   } catch (error) { // caso a requisição de erro
      return app.textContent = error  
   }
}

mostraDadosGitHub().then(bio => {
   console.log(bio) 
})
