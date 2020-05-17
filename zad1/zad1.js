
let queueWorker;
let newPersonWorker;
let firstEmployee, secondEmployee, thirdEmployee; 

let beginSimulationButton;
let numberOfEmployees, numberOfPeopleInQueue;
let muValue, sigmaValue, maxTimeNormalValue;
let lambdaValue, stepValue;
let totalNumberOfServedPeople, totalNumberOfRejectedPeople;
let queueBlock;


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
    queueBlock = document.getElementById("queueBlock");

    beginSimulationButton.addEventListener("click", beginSimulation);
});


function beginSimulation() {
    queueWorker = new Worker('queue.js');
    newPersonWorker = new Worker('newPerson.js');
    firstEmployee = new Worker('employee.js');
    secondEmployee = new Worker('employee.js');
    thirdEmployee = new Worker('employee.js');


    // Nasłuchiwanie wiadomości od nowej osoby
    newPersonWorker.addEventListener("message", ({data}) => {

        // Dodanie nowej osoby do kolejki
        if(data.action == 'newPerson') {
            queueWorker.postMessage({action: 'newPerson'});

            queueBlock.innerHTML += '<svg class="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/></svg>';
            // Aktualizacja wyświetlania

        }

    });

    // Nasłuchiwanie wiadomości od pierwszego pracownika
    firstEmployee.addEventListener("message", ({data}) => {

        // Gotowość na przyjęcie nowego klienta
        if(data.action == "getNewClient") {

        }

    });

    // Nasłuchiwanie wiadomości od drugiego pracownika
    secondEmployee.addEventListener("message", ({data}) => {
        
        // Gotowość na przyjęcie nowego klienta
        if(data.action == "getNewClient") {
            
        }
    });

    // Nasłuchiwanie wiadomości od trzeciego pracownika
    thirdEmployee.addEventListener("message", ({data}) => {
        
        // Gotowość na przyjęcie nowego klienta
        if(data.action == "getNewClient") {
            
        }
    });


    // Nasłuchiwanie wiadomości z kolejki
    queueWorker.addEventListener("message", ({data}) => {

        // Jeśli pojawiła się nowa osoba w kolejce to ją wyświetl
        if(data.action == 'newPersonInQueue') {

        }

        // Jeśli pobrano pierszą osobę z kolejki
        if(data.action == 'getFirstPerson') {
            var firstPerson = data.firstPerson;
            var workerNumber = data.workerNumber;
            switch(workerNumber){
                case 1:
                    console.log("Osoba do pierwszego pracownika");
                    //firstEmployee

                    break;
                case 2:
                    console.log("Osoba do drugiego pracownika");

                   // secondEmployee

                    break;
                case 3:
                    console.log("Osoba do trzeciego pracownika");

                    //thirdEmployee

                    break;
            }


            // Aktualizacja wyświetlanej listy
            queueBlock.innerHTML = str(queueBlock.innerHTML).replace('<svg class="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/></svg>', '');

        }

    });


    queueWorker.postMessage({action: 'startSimulation'})

    // Testowe dodawanie osób do kolejki
    queueWorker.postMessage({action: 'newPerson', personTime: 5});
    queueWorker.postMessage({action: 'newPerson', personTime: 4});
    queueWorker.postMessage({action: 'newPerson', personTime: 3});
    queueWorker.postMessage({action: 'newPerson', personTime: 3});
    queueWorker.postMessage({action: 'newPerson', personTime: 3});
    queueWorker.postMessage({action: 'newPerson', personTime: 2});

    // Pobranie kilku osób z kolejki
    // queueWorker.postMessage({action: 'getFirstPerson', workerNumber: 1});
    // queueWorker.postMessage({action: 'getFirstPerson', workerNumber: 2});
    // queueWorker.postMessage({action: 'getFirstPerson', workerNumber: 3});

    newPersonWorker.postMessage({action: 'startSimulation', muValue: muValue, sigmaValue: sigmaValue, maxTimeNormalValue: maxTimeNormalValue, lambdaValue: lambdaValue, stepValue: stepValue});



}