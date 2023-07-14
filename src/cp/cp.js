import cp from 'node:child_process';
import path from 'node:path';
import url from 'node:url';
import { pipeline } from 'node:stream';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const sourceFile = path.join(__dirname, 'files' ,'script.js');
    const childProcess = cp.fork(sourceFile, args, { silent: true });

    pipeline(process.stdin, childProcess.stdin, () => {});
    pipeline(childProcess.stdout, process.stdout, () => {});
};

spawnChildProcess(['test this functionality', '', 8765, true, null]);
