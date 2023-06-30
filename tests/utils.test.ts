import fs from 'node:fs/promises';
import { resolve } from 'node:path';

import { expect, test } from 'vitest';

import { getInfoItem } from '../src/utils';

test('getInfoItem basic', async () => {
    const infoItem = getInfoItem({
        name: 'APP_ENV',
        message: 'fat',
    });
    const outputPath = resolve(__dirname, '1.txt');
    // await fs.writeFile(outputPath, infoItem, 'utf8');
    expect(infoItem).toBe(await fs.readFile(outputPath, 'utf8'));
});

test('getInfoItem message style', async () => {
    const infoItem = getInfoItem({
        name: 'APP_ENV',
        message: 'fat',
        messageStyle: {
            color: 'red',
            bold: true,
        },
    });
    const outputPath = resolve(__dirname, '2.txt');
    // await fs.writeFile(outputPath, infoItem, 'utf8');
    expect(infoItem).toBe(await fs.readFile(outputPath, 'utf8'));
});

test('getInfoItem detect url', async () => {
    const infoItem = getInfoItem({
        name: 'Recommend',
        message: 'https://www.abc.com?debug=1',
    });
    const outputPath = resolve(__dirname, '3.txt');
    // await fs.writeFile(outputPath, infoItem, 'utf8');
    expect(infoItem).toBe(await fs.readFile(outputPath, 'utf8'));
});

test('getInfoItem disable url', async () => {
    const infoItem = getInfoItem({
        name: 'Recommend',
        message: 'https://www.abc.com?debug=1',
        isUrlMessage: false,
    });
    const outputPath = resolve(__dirname, '4.txt');
    // await fs.writeFile(outputPath, infoItem, 'utf8');
    expect(infoItem).toBe(await fs.readFile(outputPath, 'utf8'));
});
