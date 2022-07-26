'use strict';

const assert = require("assert");
// Garantir Semantica e segurança dos Objetos

const myObj = {
    add(myValue){

        return this.agr1 + this.arg2 + myValue
    }
}

assert.deepStrictEqual(myObj.add.apply({arg1: 10, arg2: 20}, [100], 130));
