import { appState } from "../AppState.js";

import { setHTML } from "../Utils/Writer.js";


function _drawSnacks() {
    let snacks = appState.snacks
    let template = ''
    snacks.forEach(snack => template += snack.ListTemplate)
    // .console.log('here is our template', template);
    setHTML('snacks', template)
}

// function _drawSnack() {

// }


export class SnacksController {
    constructor () {
        _drawSnacks()

        

    }
}