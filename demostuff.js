
// const SolPrice = await (await fetch(`${JUP_PRICE}?ids=${}`, {method: 'GET',})).json();

// https://price.jup.ag/v4/price?ids=7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs&vsToken=So11111111111111111111111111111111111111112

// const SolPrice = await (await fetch('https://price.jup.ag/v4/price?ids=GUAC', {method: 'GET',})).json();

// console.log(SolPrice);


//const keypair = getKeypairFromEnvironment("SECRET_KEY");
// import fetch from 'cross-fetch';
// import { Wallet } from '@project-serum/anchor';
// import bs58 from 'bs58';


// const connection = new Connection('https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/');
// const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || '')));


// import { createJupiterApiClient } from '@jup-ag/api';

// const jupiterQuoteApi = createJupiterApiClient(config);

// const ENDPOPOINT = 'https://solana-mainnet.core.chainstack.com/e9d8f1072f40190a855080592087f2b3';

// jupiterQuoteApi.quoteGet({
//     inputMint: "So11111111111111111111111111111111111111112",
//     outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
//     amount: "100000000",
//     // platformFeeBps: 10,
//     // asLegacyTransaction: true, // legacy transaction, default is versoined transaction
// })

// (async () => {
//   const publicKey = new PublicKey(
//     'CBp3MMYWg4dabDJoM6MkJgDRbwJv49RYgut7rdrdGpJ8'
//   );
//   const connect = new Connection(ENDPOPOINT);
//   console.log(await connect.getBalance(publicKey));
// })();