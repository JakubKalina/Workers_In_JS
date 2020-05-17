class NewPerson {

    // Konstruktor z parametrami
    constructor(muValue, sigmaValue, maxTimeNormalValue, lambdaValue, stepValue) {
        this.muValue = muValue;
        this.sigmaValue = sigmaValue;
        this.maxTimeNormalValue = maxTimeNormalValue;
        this.lambdaValue = lambdaValue;
        this.stepValue = stepValue;
    }

    myFunction() {
        setInterval(this.alertFunc, 3000);
      }
      
      alertFunc() {
        postMessage({action: "newPerson"});
      }

}


addEventListener('message', ({data}) => {
    if(data.action == 'startSimulation') {
        let newPerson = new NewPerson();
        newPerson.myFunction();
    }
});