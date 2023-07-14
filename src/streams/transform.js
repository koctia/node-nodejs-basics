import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            const strReverse = chunk.toString().split('').reverse().join('');
            callback(null, `${strReverse}\n\n`);
        }
    });

    try {
        await pipeline(process.stdin, transform, process.stdout);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await transform();
