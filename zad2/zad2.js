let drawNumbersButton;
let problemSize, minNumber, maxNumber;
let arrayOfNumbers;


document.addEventListener('DOMContentLoaded', (e) => {
    drawNumbersButton = document.getElementById("drawArrayOfNumbers");

    let indexNumber = 241346;
    let exerciseNumberResult = indexNumber % 5;
    document.getElementById("exerciseNumberResult").innerHTML = exerciseNumberResult;

    drawNumbersButton.addEventListener("click", drawArrayOfNumbers)
    

});

// Funkcja generująca tablicę losowych liczb o zadanym rozmiarze
function drawArrayOfNumbers() {
    arrayOfNumbers = [];
    problemSize = parseInt(document.getElementById("problemSizeValue").value);
    minNumber = parseInt(document.getElementById("minNumberValue").value);
    maxNumber = parseInt(document.getElementById("maxNumberValue").value);

    for(let i = 0 ; i < problemSize; i++) {
        arrayOfNumbers.push(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
    }
}