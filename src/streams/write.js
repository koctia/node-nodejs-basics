import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { pipeline } from 'node:stream/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const sourceFile = path.join(__dirname, 'files', 'fileToWrite.txt');

    const stream = fs.createWriteStream(sourceFile);

    try {
        await pipeline(process.stdin ,stream);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await write();
