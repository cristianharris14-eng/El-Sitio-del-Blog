// Task 4: delUser(number)

import { getServerURL } from './task1.js';

export async function delUser(id) {
    const url = `${getServerURL()}/users/${id}`;

    try {
        await fetch(url, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error(error);
    }
}