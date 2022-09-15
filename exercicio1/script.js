// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

// // function myname (name){
// //     console.log(`Olá, ${name}!`)
// // }
// // myname("Melton")

// // function tabuada (num){
// //     const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //     for ( let i in array){
// //         console.log(`${num} * ${array[i]} = ${num * array[i]}`)
// //     }
// // }

// // tabuada(6)


const myname = (name) =>
    console.log(`Olá, ${name}!`)

myname("Melton")


const tabuada = (num) => {
    let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for ( let i in array){
        console.log(`${num} * ${array[i]} = ${num * array[i]}`)
    }
}
tabuada(7)