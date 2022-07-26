import DraftLog from "draftlog";
import chalk from 'chalk';
import database from "./../database.json" assert{type: 'json'};
import chalkTable from 'chalk-table';
import readline from "readline";
import Person from "./person.js";
export default class TerminalController {
    constructor() {
        this.print = {}
        this.data = {}
    }

    initializaTerminal(databse, language) {
        DraftLog(console).addLineListener(process.stdin);
        this.terminal = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        this.initializaTable(database, language)
    }

    initializaTable(database, language) {
        const data = database.map(item => new Person(item).formatted())
        const table = chalkTable(this.getTableOptions(), data)

        this.print = console.draft(table)
        this.data = data
    }
    question(msg = '') {
        return new Promise(resolve => this.terminal.question(msg, resolve))

    }
    closeTerminal(){
        this.terminal.close()
    }

    getTableOptions() {
        return {
            leftPad: 2,
            columns: [
                { field: "id", name: chalk.black("ID") },
                { field: "vehicles", name: chalk.magenta("vehicles") },
                { field: "kmTravled", name: chalk.blue("kmTravled") },
                { field: "from", name: chalk.green("from") },
                { field: "to", name: chalk.yellow("to") },

            ]
        }
    }
}