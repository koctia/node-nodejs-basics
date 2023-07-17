import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import crypto from 'node:crypto';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const sourceFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    let buffer = [];

    const readFile = fs.createReadStream(sourceFile);

    readFile.on('data', (chunk) => {
        buffer.push(chunk);
    });
    readFile.on('end', () => {
        const fileBuffer = Buffer.concat(buffer);
        const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
        console.log(hash);
    });
    readFile.on('error', () => {
        throw new Error('FS operation failed');
    });
};

await calculateHash();
