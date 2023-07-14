import { parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try {
        parentPort.postMessage({ status: 'resolved', data: nthFibonacci(workerData.valueRequired) })
    } catch (error) {
        parentPort.postMessage({ status: 'error', data: null })
    }
};

sendResult();
