const {deepStrictEqual} = require('assert');
let conuter = 0
let conuter2 = conuter
conuter2++

const item = {conuter: 0}
const item2 = item

// tipo primitivo gera uma copia em memoria
deepStrictEqual(conuter, 0)
deepStrictEqual(conuter2, 1 )

// tipo de refetencia, copia o endereço de memoria e aponta para o mesmo lugar
item2.conuter ++
deepStrictEqual(item, {conuter: 1})
item.conuter ++
deepStrictEqual(item2, {conuter: 2})