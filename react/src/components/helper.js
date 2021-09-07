// helper.js
import axios from 'axios';

const apikey = '5x5fx501xfcex9e87x11ex6x';
// Autotrade delay
const trade_delay = 10000; // millis

// REST endpoint
let restdb = axios.create({
    baseURL: 'http://localhost:80/tic-tac-toe/php/board/isGameReady.php"',
    timeout: 1000,
    headers: 'Content-Type': 'application/x-www-form-urlencoded'
})
// Eventsource endpoint
const realtimeURL = `https://reactrealtime-6683.restdb.io/realtime?apikey=${apikey}`

export { apikey, restdb, realtimeURL, trade_delay };