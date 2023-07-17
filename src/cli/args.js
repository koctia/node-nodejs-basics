import { argv } from 'node:process';

const parseArgs = () => {
    const result = [];
    argv.slice(2).forEach((item, idx, arr) => item.startsWith('--') && result.push(`${item.substring(2)} is ${arr[idx+1]}`));
    console.log(result.join(', '));
};

parseArgs();
