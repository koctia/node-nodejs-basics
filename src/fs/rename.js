import fsp from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';
import { fileExists } from '../utility/function.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const sourceFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const destinationFile = path.join(__dirname, 'files', 'properFilename.md');

    if (await fileExists(destinationFile) || !(await fileExists(sourceFile))) {
        throw new Error('FS operation failed');
    }
    await fsp.rename(sourceFile, destinationFile);
};

await rename();
