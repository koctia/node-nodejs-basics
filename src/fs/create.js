import fsp from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const sourceFile = path.join(__dirname, 'files', 'fresh.txt');
    const text = `I am fresh and young`;

    try {
        await fsp.appendFile(sourceFile, text, {flag: 'ax'});
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();
