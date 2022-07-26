import database from './../database.json' assert {type: 'json'};
import Person from './person.js';
import TerminalController from './terminalController.js';

const DEFAULT_LANG = "pt-BR"
const STOP_TERM = "stop";

const terminalController = new TerminalController()
terminalController.initializaTerminal(database, DEFAULT_LANG)
// setInterval(() => {
//     database.push({id: Date.now(), veiculos:['Test' + Date.now()]})
//     const table = chalkTable(options, database)
//     print(table)
// }, 400);

async function mainLoop() {
    try {
        const aswer = await terminalController.question("O que?")
        console.log('aswer: ', aswer)
        if (aswer === STOP_TERM) {
            terminalController.closeTerminal();
            console.log('process finished')
            return;
        }
        const person = Person.generateInstanceFromString(aswer)
        console.log('person: ', person) 
        return mainLoop();
    }
    catch (e) {
        console.log(e)
        return mainLoop();
    }
}

await mainLoop()
