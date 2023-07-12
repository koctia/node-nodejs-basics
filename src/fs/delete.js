import fsp from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const sourceFile = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fsp.unlink(sourceFile);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();
