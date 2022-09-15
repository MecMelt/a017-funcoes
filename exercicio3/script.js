// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

const num = Number(prompt("Qual primeiro número para as operações ?"))
const num1 = Number(prompt("Qual segundo número para as operações ?"))

const soma = ( num, num1 ) => {
    console.log(`A soma dos números é ${num + num1}`)
} 

soma(num, num1)

const subtração = ( num, num1 ) => {
    console.log(`A subtração dos números é ${num - num1}`)
} 

subtração(num, num1)

const divisão = ( num, num1 ) => {
    console.log(`A divisão dos números é ${num / num1}`)
} 

divisão(num, num1)

const multiplicação = ( num, num1 ) => {
    console.log(`A multiplicação dos números é ${num * num1}`)
} 

multiplicação(num, num1)