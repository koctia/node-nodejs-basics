import fsp from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const sourceDirectory = path.join(__dirname, 'files');

    try {
        const files = await fsp.readdir(sourceDirectory);
        console.table(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
