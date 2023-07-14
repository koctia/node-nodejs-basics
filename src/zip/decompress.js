import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const sourceFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archiveFile = path.join(__dirname, 'files', 'archive.gz');

    const unzip = createGunzip();
    const inputFile = fs.createReadStream(archiveFile);
    const outputFile = fs.createWriteStream(sourceFile);

    try {
        await pipeline(inputFile, unzip, outputFile);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await decompress();