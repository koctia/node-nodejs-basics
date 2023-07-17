import fsp from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const sourceFile = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const data = await fsp.readFile(sourceFile, { encoding: 'utf-8' });
        console.log(data);
    } catch(error) {
        throw new Error('FS operation failed');
    }
};

await read();
