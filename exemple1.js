//c-like

const valor = 11

if (valor === 10) {
    console.log('O valor é 10')
}else{
    console.log('O valor não é 10')
}

const valor2 = 20

const objeto = {
    chave: 'valor1',
    chave2: 'valor2',
}

console.log(objeto)
// functions are first class citizens

const soma = function(a,b){
    return a + b 
}
//o primeiro parâmetro 'op' é de inicio uma variável vazia logo a função soma será injetada em op qunado for chamada no console.log(calculadora(soma(3,4)))
const calculadora = function(op,a,b){
    return op(a,b)
}
console.log(calculadora(soma,3,4))

//vetores:

const vetor = [1,2,3,4,5,6,7,8,9]

//metodo .map()
const dobrado = vetor.map(function(item){
    return item * 3
})
console.log(vetor)
console.log(dobrado)

//metodo filter)() modulo(divi por dois e pegar o resto se for = 0  ele retorna o vetor)
const pares = vetor.filter(function(item) {
    return item % 2 === 0
})
console.log('Pares :',pares)

//Pares dobrado

/*const paresDobrado  = vetor.filter(function(item) {
    return item % 2 === 0
}).map(function(item){
    return item * 2

})
console.log ('Pares dobrado', paresDobrado)*/

              //OU do jeito abaixo usando arrow function

const dobrar= item => {return item * 2}

const paresDobrado  = vetor.filter(function(item) {
    return item % 2 === 0
}).map(dobrar)
console.log ('Pares dobrado', paresDobrado)


const somar = (acumulado, atual) => acumulado+atual
const somatorio = paresDobrado.reduce(somar)

console.log('Somar com reduce', somatorio)

const vetor1 = [10,20,30,40,50]

const dobrarvetor = vetor1.reduce(somar)

console.log('Dobrar vetor :',dobrarvetor)