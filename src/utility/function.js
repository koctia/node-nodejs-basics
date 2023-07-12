import { stat } from 'node:fs/promises';

export const fileExists = async (path) => !!(await stat(path).catch((error) => false));
