import { getTime } from '@thundernetworkrad/time';

import { appendFile, existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';

let time;
const startTime = getTime();
time = startTime;
const name = `${time.year}.${time.month}.${time.day}.${time.hours}.${time.minutes}.${time.seconds}.log`;

/**
 * 
 * @param string to log
 */
export function log (string?: string) {
    if (!existsSync('./logs')) mkdir('./logs', { recursive: true });

    appendFile(`./logs/${name}`, string+'\n', (err: any) => {
        if (err) {
            throw err
        }
    })
};