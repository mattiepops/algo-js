const readlineSync = require('readline-sync');
function askTvSerie() {
let a = readlineSync.question("What is your favourite show? ");
let b = readlineSync.question("When was this show made? ");
let n = Number.parseInt(readlineSync.question("How many cast members do you want to mention? "));

    let series = {
        showName: a,
        prodYear: b,
        castMembers: []
    }

    for (let i = 0; i < n; i++) {
        series.castMembers.push(readlineSync.question("Name of cast members: "));
    }
    console.log(series);
}

askTvSerie();

let array2 = [];

for (let i in series) {
    let randomIndex = Math.floor(Math.random() * series.length);
    while (array2.includes(series[randomIndex])){
        randomIndex= Math.floor(Math.random() * series.length);
    }

}