function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sorteio() {

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if (num2 > num1) {
        let sort = getRandomIntInclusive(num1, num2)
        document.getElementById("result").innerHTML = sort;

    } else if (num1 > num2) {
        let sort = getRandomIntInclusive(num2, num1)
        document.getElementById("result").innerHTML = sort;
    }
    else {
        document.getElementById("result").innerHTML = 'Escolha um intervalo!'
    }
}
