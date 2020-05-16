class Queue {

    // Konstruktor z parametrami
    constructor() {
    }

}


addEventListener('message', ({data}) => {
    if(data.action == 'startSimulation') {
        let queue = new Queue();
    }
});