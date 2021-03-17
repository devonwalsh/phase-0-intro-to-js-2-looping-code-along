function writeCards(name, event) {
    let messages = [];
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n = n - 1;
    }
}

countDown(10);