import { env } from 'node:process';

const parseEnv = () => {
    const result = [];
    for (const item in env) {
        if (item.startsWith('RSS_')) {
            result.push(`${item}=${env[item]}`);
        }
    }
    console.log(result.join('; '));
};

parseEnv();
