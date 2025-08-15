const secretKeyFromFile = Uint8Array.from(JSON.parse(fs.readFileSync('solana-wallet.json')));
const restoredKeypair = web3.Keypair.fromSecretKey(secretKeyFromFile);

console.log("Restored Address:", restoredKeypair.publicKey.toBase58());
