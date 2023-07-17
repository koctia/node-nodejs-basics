import fsp from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceDirectory = path.join(__dirname, 'files');
    const destinationDirectory = path.join(__dirname, 'files_copy');

    try {
        await fsp.cp(sourceDirectory, destinationDirectory, { recursive: true, force: false, errorOnExist: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
