import { appState } from "../AppState.js";
import {snacksService} from "../Services/SnacksService.js"
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

function _drawMoney() {
    let money = appState.money
    let template = ''
    for (let i = 0; i < money; i++) {
        template += `<div class="col-1 fs-1">
        $$
        </div>`
    }
    setHTML('add-money', template)
}


export class SnacksController {
    constructor () {
        _drawSnacks()

        appState.on('money', _drawMoney)

    }

    increaseCoins () {
        snacksService.increaseCoins()
    }
}