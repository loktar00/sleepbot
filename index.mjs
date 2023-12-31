import "dotenv/config";
import { confirm } from '@inquirer/prompts';
import prompt from 'inquirer-interactive-list-prompt';
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
import { Connection, Keypair, VersionedTransaction, PublicKey } from '@solana/web3.js';
import { JUP_PRICE, SOL_TOKEN } from "./constants.mjs";
import { createAccount } from './utils/utils.mjs';
import { getTokenPrice } from './actions/tokenPrice.mjs';

async function getPrice (ca, solAmount) {
    const data = await (await fetch(`${JUP_PRICE}?ids=${ca}&vsToken=${SOL_TOKEN}`, {method: 'GET',})).json();
    const caData = data.data[ca];
    const { mintSymbol, price } = caData;

    const solMult = Number(solAmount);
    const priceMult = solMult / price.toFixed(10);

    console.log(`The amount of ${mintSymbol} for ${solAmount} SOL is ${priceMult}`);
}

async function price() {
    const userData = await getTokenPrice();
    await getPrice(userData.CA, userData.SOLAmount);
    main();
}

async function main() {
    const option = await prompt({
        message: 'Select an option:',
        choices: [
        { name: 'Get Token Price', value: 'price', key: 'p' },
        { name: 'Quit', value: 'quit', key: 'q' },
        ],
        renderSelected: choice => `❯ ${choice.name} (${choice.key})`, // optional
        renderUnselected: choice => `  ${choice.name} (${choice.key})`, // optional
    });

    if (option === 'price') {
        await price();
    }
}

main();
