function checkString(str) {
    let isBinary = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "0" || str[i] == "1") {
            isBinary = true;
        } else {
            isBinary = false;
            return isBinary;
        }
    }
    return isBinary;
}

function bin2dec(n, value) {
    let term = 0;
    if (value === 1) {
        term = 2 ** n;;
        return term;
    }
    else {
        return term;
    }
}

function converti() {
    let inputNumber = document.getElementById("inputNumber").value;
    sum = 0;
    if (inputNumber.length <= 0) {
        alert("Inserisci un numero di cifre maggiore di 0!");
        reset();
    } else if (checkString(inputNumber) == false) {
        alert("Inserisci un numero binario!");
        reset();
    } else {
        let reverseString = inputNumber.split("").reverse().join("");
        let outputNumber = document.getElementById("outputNumber");
        for (let i = 0; i < reverseString.length; i++) {
            binValue = Number(reverseString[i]);
            sum += bin2dec(i, binValue);
        }
        return outputNumber.value = sum;
    }
}

function reset() {
    let inputNumber = document.getElementById("inputNumber");
    let outputNumber = document.getElementById("outputNumber");
    inputNumber.value = '';
    outputNumber.value = '';
    return;
}

document.getElementById("submit.Bt").addEventListener("click", converti);
document.getElementById("reset.Bt").addEventListener("click", reset);