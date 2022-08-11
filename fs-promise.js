const fs = require('fs')

//Exporta as duas funções pra o arquivo.js


//Ler arquivo
  const readFile = path => new Promise((resolve, reject)=> {
    fs.readFile(path, (err, data)=>{
        if(err) {
            reject(err)
        }else{
            resolve(data)
        }
    })
})

//escrever arquivo
const writeFile = (path, data) => new Promise((resolve, reject)=> {
    fs.writeFile(path, data, (err) => {
        if(err){
            reject(err)
        }else{
            resolve()
        }
    })
})

module.exports = {
    readFile,   writeFile
}