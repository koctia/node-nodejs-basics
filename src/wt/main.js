import path from 'node:path';
import url from 'node:url';
import os from 'node:os';
import { Worker } from 'node:worker_threads';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BEGIN_NUMBER = 10;

const performCalculations = async () => {
    const sourceFile = path.join(__dirname, 'worker.js');
    const arrayResult = [];

    const promise = (item) => new Promise((resolve) => {
        const worker = new Worker(sourceFile, {
            workerData: { valueRequired: BEGIN_NUMBER + item }
        });
        worker.on('message', (message) => resolve(message));
    });

    os.cpus().map((_, idx) => {
        arrayResult.push(promise(idx));
    });

    const results = await Promise.all(arrayResult);
    console.log(results);
};

await performCalculations();
