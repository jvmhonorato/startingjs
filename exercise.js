/*
Exercícios extras (Aula 01):
Os exercícios aqui propostos visam reforçar a prática da linguagem javascript de acordo com o que foi visto na primeira aula extra.
*/
// 1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.
const somar = (acumulado, atual) => acumulado+atual

const vetor1 = [10,11,20,21,30,31,40,41,50,51]

const dobrarvetor = vetor1.reduce(somar)

console.log('Dobrar vetor :',dobrarvetor)

//2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.

const impares = vetor1.filter(function(item){
    return item % 2 !== 0
})
console.log('Impares :', impares)

//3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.


const somarImpares = impares.reduce(somar)

console.log('Somar impares :', somarImpares)

//4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor - Dica: utilize reduce

//5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor - aqueles que ocorrem apenas 1 vez dentro do vetor.

//6) Dado um vetor com números, retorne somente os números pares;

//7) Dado um vetor com números, retorne somente os números ímpares;

/*8) Uma função é chamada da seguinte forma:
calculadora(10, '+', 20)
crie o corpo da função de forma que ela realize as 4 operações aritméticas*/

/*9) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. 
Exemplo:
const soma = (num1, num2) => num1+num2
const calculadoraFn = (....) => ….
calculadoraFn(10, soma, 20)*/


