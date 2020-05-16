class Employee {

    // Konstruktor z parametrami
    constructor() {
    }

}


addEventListener('message', ({data}) => {
    if(data.action == 'startSimulation') {
        let employee = new Employee();
    }
});