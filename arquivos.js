const { readFile, writeFile }  = require('./fs-promise')

// copiar arquivo /QUANDO ARQUIVO CRESCE PRA FRENTE ELE VIRA CALLBACK HELL
/*fs.readFile('temporizador.js', (err, data) => {
    fs.writeFile('temporizador-copy.js', data, (err)=> {
        console.log( 'Arquivo copiado')
    })
})
*/


/*
readFile('temporizador.js')
.then(data => writeFile('copia-promise.js',data))
.then(() => console.log('arquivo copiado'))
.catch(err => console.log(err))
*/

// async / await

//função syncrona estanciar a leitura do arquivo temporizador em "data" em seguida mostrar no console em formato string 
const copyFile = async() => {
    //modulo importado de fs-promise.js
    try{
        console.log('antes do await')
        const data = await readFile('temporizador.js')

        //primeiro parâmetro é o nome do arquivo que será escrito e o segundo parâmetro são dados que serão inserido nele
        await writeFile('copy-async-await.js',data)
        //console.log(String(data))
    } catch(err){
        console.log(err)
    }
  
}
copyFile().then(() => console.log('Fim do async/await'))