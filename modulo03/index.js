'use strict';
const {watch, promises: {readFile}} = require('fs')

class File{
    watch(event, filename){
        console.log('this', this)
        console.log('arguments', Array.prototype.slice.call(arguments))
        this.showContent(filename)
    }

    async showContent(){
        console.log((await readFile(filename)).toString()) 
    }
}

// watch(__filename, async (event, filename) => {
//     console.log((await readFile(filename)).toString())
// })

const file = new File()
//watch(__filename, (event, filename)=>file.watch(event, filename))
//O bind retorna uma função com o this que se mantem de file, ignorando o watch
//watch(__filename, file.watch.bind())

file.watch.call({showContent:() => console.log('call: hey sinon')}, null, __filename)
file.watch.apply({showContent:() => console.log('call: hey sinon')}, [null, __filename])