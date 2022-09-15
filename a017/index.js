//Esquenta:

const minhaFuncao = () => "Olá, mundo!"
console.log(minhaFuncao());


// ========= PRATICA GUIADA 1 =============
console.log("PRATICA GUIADA 1 ")
function digaOi(){
    console.log("Olá, turma Ammal A") 
}

digaOi()


// ========= PRATICA GUIADA 2 =============
console.log("PRATICA GUIADA 2 ")
function digaOiNome(nome){
    console.log(`olá, ${nome}`)
}

digaOiNome("Vitor")
digaOiNome("Karine")
digaOiNome("Pedro")
// digaOiNome(prompt("digite seu nome"))


//Funcão não-nomeada
const chameNome = function(nome){
    console.log(nome)
}

chameNome("Clara")

// ========= PRATICA GUIADA 3 =============
console.log("PRATICA GUIADA 3 ")

function somarNumeros(num1,num2){
    console.log("soma dentro da função:", num1+num2) // ação
}

somarNumeros(1,1) //jeito certo

//jeito que não imprime
// const somarFuncao = somarNumeros(1,1)
// console.log("soma sem return:",somarFuncao)


//COM RETURN
function somarNumerosReturn(num1,num2){
    return num1 + num2 // resultado
}


const somarFuncaoReturn = somarNumerosReturn(2,2)
console.log("soma com return: ",somarFuncaoReturn)

// ========= PRATICA GUIADA 4 =============
console.log("PRATICA GUIADA 4 ")

//Crie uma função 
//que receba um array de números 
//e retorne um novo array apenas com o primeiro e último número.


const imprimeNumeros = (array) => {

    const novoArray = []
    novoArray.push(array[0], array[array.length-1])

    return "novo array: "+novoArray // resultado
}

const arrayTeste = [1,2,3,4,5,6,7,8,9,10]

console.log(imprimeNumeros(arrayTeste))


// ========= PRATICA GUIADA 5 =============
console.log("PRATICA GUIADA 5 ")

// Crie uma função que 
//receba um  array de números como parâmetro e 
// retorne um novo array apenas com os números pares.

function numerosPares (array) {
    let novoArrayPar=[]

    for(let i of array){
        if(i%2 === 0){
            novoArrayPar.push(i)
        }
    }
    return novoArrayPar
}

const arrayTeste2 = [23,76,100,1,435,70]

console.log(numerosPares(arrayTeste2))

// ========= EXERCICIO FICAXAO =============
console.log("EXERCICIO FICAXAO")


function imprimirNumParesDividido(array){
    const novoArray = []

    const primerioValor = array[0]
    const ultimoValor = array[array.length - 1]

    novoArray.push((primerioValor/2), (ultimoValor/2))

    return novoArray
}
    

const arrayTeste3=[2,4,6,8]
const arrayTeste4=[1,3,5,7,9]

console.log(imprimirNumParesDividido(arrayTeste3))
console.log(imprimirNumParesDividido(arrayTeste4))


