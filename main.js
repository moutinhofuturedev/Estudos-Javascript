// Nullish Coalescing Operator

// Caso um variável receba um valor considerado como falsy (null, undefined, número 0) 
// são valores não valídos para o Javacript 
// neste caso , o correto é usar Nullish Coalescing Operator (?? ao invés de || )
const idade = null

console.log(`Minha idade é ${(idade ?? 'Não informado')} anos`)

// Objetos => guardar conjuntos de chave e valor
const user = {
  name: 'Paulo',
  age: 32,
  address: {
    street: 'Nulla', 
    number: '123'
  }
}

console.log('name' in user) // true

// podemos usar alguns métodos para retonar os dados dentro de um objeto

// método Object.key => retorna um array com as props (keys) do objeto
// Object.keys(user)
// método Object.value => retorna um array com os valores das propriedades
// Object.value(user)
// caso tenha um objeto dentro de outro objeto, usar ( . ) vai dar acesso aos keys e values do outro objeto e reortnar um array com eles
// Object.keys(user.address)

// Outra tática para mostrar em tela estrutura de dados mais complexas é usar:
// JSON.stringify(Object.keys(user))

// Usando o método entries() retorna uma estrutura de dados em arrays dentro de array
// JSON.stringify(Object.entries(user))

// DESESTRUTURAÇÃO ( jeito certo de fazer )

const member = {
  name: 'Rayanne',
  age: 18,
  team: {
    job: 'Leader',
    period: 'morning'
  }
}

// quero pegar somente o os dados de team dentro o objeto member
const app = document.getElementById('app')
const { team, name } = member
app.textContent = JSON.stringify({team, name})

// desestrturação com function
function showJob(member) {
  return member.team.job
} 
console.log(showJob(member)) // result 'Leader'

function showPeriod({ period }) {
  return period
}

console.log(showPeriod(member.team)) // result 'morning'

// REST OPERATOR 
const cars = {
  gm: 'Cruze',
  fiat: 'Toro',
  jeep: 'Renegade'
}                

const { fiat, ...rest } = cars
console.log(rest) // resultado do ...rest é gm: 'Cruze' e jeep: 'Renegade'. A propriedade fiat foi desestruturada

// usando REST OPERATOR em arrays
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

 // => pegando pelo index
const third = array[3]
// console.log(first) // result: 4

// => pegando pelo rest operator
const [first, second, ...newRest] = array
console.log(JSON.stringify({first, second, ...newRest}))

// SHORT SYNTHAX => sintaxe curta
const mother = 'Mariah'
const father = 'John'
const son = 'Smith'

const family = {  // neste caso, o javascript assume dentro do objeto, as propriedades com os valores das variáveis
  mother,
  father,
  son
}

function getFamily({ mother }) {
  return mother
}

console.log(getFamily(family))
