import "dotenv/config";
import { confirm } from '@inquirer/prompts';
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
import { Connection, Keypair, VersionedTransaction, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
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

async function main() {
    const userData = await getTokenPrice();
    await getPrice(userData.CA, userData.SOLAmount);

    const userContinue = await confirm({ message: 'Do you want to lookup another token?' });

    if (userContinue) {
        main();
    }

    return false;
}

main();
