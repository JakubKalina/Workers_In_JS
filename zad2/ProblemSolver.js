class ProblemSolver {

    // Konstruktor z parametrami
    constructor(arrayOfNumbers) {
        this.arrayOfNumbers = arrayOfNumbers;
    }

    solutionSlow(A) {

        if (A.length == 0) return 0;

        if (1 == A.length) return Math.abs(A[0]);

        let arrayOfSums = new Array(A.length + 1);
        let result = Number.MAX_SAFE_INTEGER;

        arrayOfSums[0] = 0;

        for (var i = 0; i < A.length; i++) {
            arrayOfSums[i + 1] = A[i] + arrayOfSums[i];
        }

        arrayOfSums.sort();

        let counterStep = Math.floor(arrayOfSums.length / 100);
        let counterTmp = 0;

        for (var i = 1; i < arrayOfSums.length; i++) {
            result = Math.min(result, Math.abs(arrayOfSums[i] - arrayOfSums[i - 1]));
            if (counterTmp == counterStep) {
                postMessage({
                    action: 'notifyProgress',
                    status: 'done'
                });
                counterTmp = 0;
            }
        }

        console.log(result);

        // return minAbsSum;
        postMessage({
            action: 'finishedCalculations',
            lowestSum: result
        });

    }

    solutionFast(A) {
        let lowestSum;
        let ArrayLength = A.length;
        let maxValue = 0;

        for (let i = 0; i < ArrayLength; i++) {
            A[i] = Math.abs(A[i]);
            if (maxValue > A[i]) {
                maxValue = maxValue;
            } else {
                maxValue = A[i];
            }
        }

        let SumOfElements = 0;

        for (let i = 0; i < A.length; i++) {
            SumOfElements += A[i];
        }

        let countMultiple = [];

        for (let i = 0; i < maxValue + 1; i++) {
            countMultiple.push(0);
        }

        // Liczenie wystąpień
        for (let i = 0; i < ArrayLength; i++) {
            countMultiple[A[i]] += 1;
        }

        let tmp = [];

        for (let i = 0; i < SumOfElements + 1; i++) {
            tmp.push(-1);
        }

        tmp[0] = 0;
        let counterStep = Math.floor(((maxValue + 1) * (SumOfElements)) / 100);
        let counterTmp = 0;


        for (let a = 1; a < maxValue + 1; a++) {
            if (countMultiple[a] > 0) {
                for (let j = 0; j < SumOfElements; j++) {

                    counterTmp++;
                    if (counterTmp == counterStep) {
                        postMessage({
                            action: 'notifyProgress',
                            status: 'done'
                        });
                        counterTmp = 0;
                    }

                    if (tmp[j] >= 0) {
                        tmp[j] = countMultiple[a];
                    }
                    if ((j >= a) && (tmp[j - a] > 0)) {
                        tmp[j] = tmp[j - a] - 1;
                    }
                }
            }
        }

        let result = SumOfElements;

        for (let i = 0; i < (SumOfElements / 2) + 1; i++) {
            if (tmp[i] >= 0) {
                if (result < SumOfElements - 2 * i) {
                    result = result;
                } else {
                    result = SumOfElements - 2 * i;
                }
            }
        }

        lowestSum = result;

        //     postMessage({action: 'notifyProgress', status: 'done'});

        postMessage({
            action: 'finishedCalculations',
            lowestSum: lowestSum
        });
    }
}

addEventListener('message', ({
    data
}) => {
    if (data.action == 'startCalculationsFast') {
        let solver = new ProblemSolver(data.arrayOfNumbers);
        solver.solutionFast(solver.arrayOfNumbers);
    }
    if (data.action == 'startCalculationsSlow') {
        let solver = new ProblemSolver(data.arrayOfNumbers);
        solver.solutionSlow(solver.arrayOfNumbers);
    }
});