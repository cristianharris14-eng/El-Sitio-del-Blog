import { getServerURL } from './task1.js';

export async function listUsers() {
    const url = `${getServerURL()}/users`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        let lines = ["["];
        data.forEach((user, index) => {
            lines.push("{");
            lines.push(`  id: ${user.id},`);
            lines.push(`  first_name: '${user.first_name}',`);
            lines.push(`  last_name: '${user.last_name}',`);
            lines.push(`  email: '${user.email}'`);
            lines.push(index === data.length - 1 ? "}" : "},");
        });
        lines.push("]");

        console.log(lines.join("\n"));
    } catch (error) {
        console.error(error);
    }
}