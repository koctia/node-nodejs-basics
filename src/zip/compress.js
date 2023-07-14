import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const sourceFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archiveFile = path.join(__dirname, 'files', 'archive.gz');

    const gzip = createGzip();
    const inputFile = fs.createReadStream(sourceFile);
    const outputFile = fs.createWriteStream(archiveFile);

    try {
        await pipeline(inputFile, gzip, outputFile);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await compress();
