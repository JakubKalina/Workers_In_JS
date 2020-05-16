class NewPerson {

    // Konstruktor z parametrami
    constructor() {
    }

}


addEventListener('message', ({data}) => {
    if(data.action == 'startSimulation') {
        let newPerson = new NewPerson();
    }
});