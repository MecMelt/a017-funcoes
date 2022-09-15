// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas
// e imprima o resultado. Invoque a função e imprima no console o resultado.

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é 
//**maior ou igual** ao segundo.

// c) Uma função que receba um número e imprima se ele é par ou não

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela contendo apenas letras maiúsculas.

const soma = ( num, num1 ) => {
    console.log(`a soma dos números é ${num + num1}`)
} 

soma(1, 2)

const bool = ( num2, num3 ) => {
    console.log(num2 >= num3)
} 

bool(5, 2)

const verifica = ( num4 ) => {
    let par = num4 % 2
    if (par === 0){
        console.log("O número é par")
    }
    else {
        console.log( "O número é ímpar")
    }
} 

verifica(6)

const observe = (user) => {
    console.log(`Quantidade de letras do nome é : ${user.length}`)
    console.log(user.toUpperCase())
}

observe("MecMelt")


