console.log('teste1')
setTimeout(()=>{
    console.log('1 segundo')
},1000)
setTimeout(()=>{
    console.log('2 segundos')
},2000)
setTimeout(()=>{
    console.log('3 segundos')
},3000)

console.log('teste2')

//iniciando um loop com setInterval e finalizando depois de 20 segundos com, clearInterval 
let count = 0
let interval = setInterval(() => {
    console.log('executando o setInterval a cada 2 segundo')
    count++
    if(count > 20){
        clearInterval(interval)
    }
}, 2000);

let interval2 = setInterval(() => {
    count++
    if(count > 15){
        clearInterval(interval2)
    }
},500)
console.log(3)