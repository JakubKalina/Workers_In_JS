class Queue {

    

    // Konstruktor
    constructor() {
        // Kolejka czasów ile każdy z nich spędzi przy okienku
        this.queue = [];
    }

    addNewPerson(ownTime) {
        this.queue.push(ownTime);
    }

    getFirstPerson() {
        return this.queue.shift();
    }

}


addEventListener('message', ({data}) => {

    let queue;
    // Rozpoczecie symulacji
    if(data.action == 'startSimulation') {
        this.queue = new Queue();
    }

    // Dodanie do kolejki nowej osoby
    if(data.action == 'newPerson') {
        this.queue.addNewPerson(data.personTime);
    }

    // Pobranie pierwszej osoby z kolejki
    if(data.action == 'getFirstPerson') {
        try {
            var firstPerson = this.queue.getFirstPerson();
            var workerNumber = data.workerNumber;
            postMessage({action: 'getFirstPerson', firstPerson: firstPerson, workerNumber: workerNumber});
        } catch(ex) {

        }

    }
});