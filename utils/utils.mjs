import { Keypair } from '@solana/web3.js';

export function createAccount() {
    const keypair = Keypair.generate();
    return keypair;
}