let drawNumbersButton, beginSolverFasterButton, beginSolverSlowerButton, statusProgressBar, resultsBlock, lowestSumResult;
let problemSize, minNumber, maxNumber;
let arrayOfNumbers;
let solverWorker;
let progressBarValue = 0;
let bestSequence;
let lowestSum;

document.addEventListener('DOMContentLoaded', (e) => {
    drawNumbersButton = document.getElementById("drawArrayOfNumbers");
    beginSolverFasterButton = document.getElementById("beginSolverFasterButton");
    beginSolverSlowerButton = document.getElementById("beginSolverSlowerButton");

    statusProgressBar = document.getElementById("statusProgressBar");
    resultsBlock = document.getElementById("resultsBlock");
    lowestSumResult = document.getElementById("lowestSumResult");

    let indexNumber = 241346;
    let exerciseNumberResult = indexNumber % 5;
    document.getElementById("exerciseNumberResult").innerHTML = exerciseNumberResult;

    drawNumbersButton.addEventListener("click", drawArrayOfNumbers);
    beginSolverFasterButton.addEventListener("click", beginSolverFasterCalculations);
    beginSolverSlowerButton.addEventListener("click", beginSolverSlowerCalculations);


});

// Funkcja generująca tablicę losowych liczb o zadanym rozmiarze
function drawArrayOfNumbers() {
    arrayOfNumbers = [];
    problemSize = parseInt(document.getElementById("problemSizeValue").value);
    minNumber = parseInt(document.getElementById("minNumberValue").value);
    maxNumber = parseInt(document.getElementById("maxNumberValue").value);
    beginSolverFasterButton.disabled = false;
    beginSolverSlowerButton.disabled = false;


    // Aktualizacja statusu
    progressBarValue = 0;
    statusProgressBar.innerHTML = progressBarValue + '%';
    statusProgressBar.setAttribute('aria-valuenow', progressBarValue);
    statusProgressBar.setAttribute('style', 'width: ' + progressBarValue + '%');

    for (let i = 0; i < problemSize; i++) {
        arrayOfNumbers.push(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
    }

}

function beginSolverSlowerCalculations() {
    // Aktualizacja statusu
    progressBarValue = 0;
    statusProgressBar.innerHTML = progressBarValue + '%';
    statusProgressBar.setAttribute('aria-valuenow', progressBarValue);
    statusProgressBar.setAttribute('style', 'width: ' + progressBarValue + '%');

    solverWorker = new Worker('ProblemSolver.js');
    solverWorker.postMessage({
        type: 'cmd',
        action: 'startCalculationsSlow',
        problemSize: problemSize,
        arrayOfNumbers: arrayOfNumbers
    });

    solverWorker.addEventListener("message", ({
        data
    }) => {

        // Jeśli aktualizacja paska postępu
        if (data.action == 'notifyProgress') {

            progressBarValue += 1;

            // Aktualizacja statusu
            statusProgressBar.innerHTML = progressBarValue + '%';
            statusProgressBar.setAttribute('aria-valuenow', progressBarValue);
            statusProgressBar.setAttribute('style', 'width: ' + progressBarValue + '%');
        }

        // Jeśli ukończono obliczenia
        if (data.action == 'finishedCalculations') {

            progressBarValue = 100;

            // Aktualizacja statusu
            statusProgressBar.innerHTML = progressBarValue + '%';
            statusProgressBar.setAttribute('aria-valuenow', progressBarValue);
            statusProgressBar.setAttribute('style', 'width: ' + progressBarValue + '%');

            lowestSumResult.innerHTML = data.lowestSum;
            resultsBlock.setAttribute('style', 'display: block !important');
        }

    });
}




function beginSolverFasterCalculations() {
    // Aktualizacja statusu
    progressBarValue = 0;
    statusProgressBar.innerHTML = progressBarValue + '%';
    statusProgressBar.setAttribute('aria-valuenow', progressBarValue);
    statusProgressBar.setAttribute('style', 'width: ' + progressBarValue + '%');

    solverWorker = new Worker('ProblemSolver.js');
    solverWorker.postMessage({
        type: 'cmd',
        action: 'startCalculationsFast',
        problemSize: problemSize,
        arrayOfNumbers: arrayOfNumbers
    });

    solverWorker.addEventListener("message", ({
        data
    }) => {

        // Jeśli aktualizacja paska postępu
        if (data.action == 'notifyProgress') {

            progressBarValue += 1;

            // Aktualizacja statusu
            statusProgressBar.innerHTML = progressBarValue + '%';
            statusProgressBar.setAttribute('aria-valuenow', progressBarValue);
            statusProgressBar.setAttribute('style', 'width: ' + progressBarValue + '%');
        }

        // Jeśli ukończono obliczenia
        if (data.action == 'finishedCalculations') {

            progressBarValue = 100;

            // Aktualizacja statusu
            statusProgressBar.innerHTML = progressBarValue + '%';
            statusProgressBar.setAttribute('aria-valuenow', progressBarValue);
            statusProgressBar.setAttribute('style', 'width: ' + progressBarValue + '%');

            lowestSumResult.innerHTML = data.lowestSum;
            resultsBlock.setAttribute('style', 'display: block !important');
        }

    });
}