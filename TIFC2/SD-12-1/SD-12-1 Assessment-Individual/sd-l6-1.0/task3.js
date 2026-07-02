import { getServerURL } from './task1.js';

export async function addUser(first_name, last_name, email) {
    const url = `${getServerURL()}/users`;
    const newUser = { first_name, last_name, email };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        
        const data = await response.json();

    
        let lines = [
            "{",
            `  id: ${data.id},`,
            `  first_name: '${data.first_name}',`,
            `  last_name: '${data.last_name}',`,
            `  email: '${data.email}'`,
            "}"
        ];

        console.log(lines.join("\n"));
    } catch (error) {
        console.error(error);
    }
}