const assert = require('assert');
const obj = {}
const arr = []
const functio = () => { }

// Interamente, objetos literais viram funções explicitas

console.log('new Object is {} ?', new Object()._proto_==={}._proto_)
assert.deepStrictEqual(new Object()._proto_, {}._proto_)

// Proto nada mais é a referencia do Objeto que possui as propriedades nele 
console.log('obj._proto_ === Object.prototype', obj._proto_ === Object.prototype)
assert.deepStrictEqual(obj._proto_, Object.prototype)

console.log('arr._proto_ === Array.prototype', arr._proto_ === Array.prototype)
assert.deepStrictEqual(arr._proto_, Array.prototype)

console.log('functio._proto_ === Function.prototype', functio._proto_ === Function.prototype)
assert.deepStrictEqual(functio._proto_, Function.prototype)
