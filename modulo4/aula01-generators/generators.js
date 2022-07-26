const assert = require('assert');

function* calculation(arg1, arg2) {
    yield arg1 * arg2
}

function* main() {
    yield 'Hello'
    yield '' - ''
    yield 'world'
    yield '<3'
    yield* calculation(20, 10)
}

const generator = main()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
//Ele chama a promisse como feito em cima ate chegar na raiz e retornar undefined. ae ele retorna um true.