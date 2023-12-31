import { input } from '@inquirer/prompts';

export async function getTokenPrice() {
    const data = {
        CA: await input({ message: 'Enter the CA of the token: ' }),
        SOLAmount: await input({ message: 'Sol Amount: ' }),
    }

    return data;
}