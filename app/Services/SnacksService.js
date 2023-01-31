import { appState } from "../AppState.js";



class SnacksService {

    increaseCoins() {
        appState.money++
    }
}
export const snacksService = new SnacksService()