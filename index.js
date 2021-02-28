function writeCards(name, event) {
    for (i = 0; i < name.length; i++) {
        console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n = n - 1;
    }
}

countDown(10);