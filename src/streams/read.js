import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { pipeline } from 'node:stream/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const sourceFile = path.join(__dirname, 'files', 'fileToRead.txt');

    const stream = fs.createReadStream(sourceFile);

    try {
        await pipeline(stream, process.stdout);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await read();
