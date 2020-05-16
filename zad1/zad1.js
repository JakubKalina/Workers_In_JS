
let queueWorker;
let newPersonWorker;
let firstEmployee, secondEmployee, thirdEmployee; 

let beginSimulationButton;
let numberOfEmployees, numberOfPeopleInQueue;
let muValue, sigmaValue, maxTimeNormalValue;
let lambdaValue, stepValue;
let totalNumberOfServedPeople, totalNumberOfRejectedPeople;


document.addEventListener('DOMContentLoaded', (e) => {
    beginSimulationButton = document.getElementById("beginSimulationButton");
    numberOfEmployees = document.getElementById("numberOfEmployees").value;
    numberOfPeopleInQueue = document.getElementById("numberOfPeopleInQueue").value;
    muValue = document.getElementById("muValue").value;
    sigmaValue = document.getElementById("sigmaValue").value;
    maxTimeNormalValue = document.getElementById("maxTimeNormalValue").value;
    lambdaValue = document.getElementById("lambdaValue").value;
    stepValue = document.getElementById("stepValue").value;
    maxTimeExponentialValue = document.getElementById("maxTimeExponentialValue").value;
    totalNumberOfServedPeople = document.getElementById("totalNumberOfServedPeople");
    totalNumberOfRejectedPeople = document.getElementById("totalNumberOfRejectedPeople");



    beginSimulationButton.addEventListener("click", beginSimulation);
    
});


function beginSimulation() {
    queueWorker = new Worker('queue.js');
    newPersonWorker = new Worker('newPerson.js');
    firstEmployee = new Worker('employee.js');
    secondEmployee = new Worker('employee.js');
    thirdEmployee = new Worker('employee.js');



    // dalsza praca
}