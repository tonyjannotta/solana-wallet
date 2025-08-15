const fs = require('fs');
const bs58 = require('bs58');
const web3 = require('@solana/web3.js');

// Load secret key array from file
const secretKeyArray = JSON.parse(fs.readFileSync('solana-wallet.json', 'utf8'));
const secretKey = Uint8Array.from(secretKeyArray);

// Reconstruct the keypair
const keypair = web3.Keypair.fromSecretKey(secretKey);

// Convert to Base58 format (Phantom-compatible)
const base58PrivateKey = bs58.encode(secretKey);

console.log("✅ Phantom-compatible private key (Base58):");
console.log(base58PrivateKey);

console.log("\n🔑 Wallet address:");
console.log(keypair.publicKey.toBase58());
console.log("\n💾 You can import this private key into Phantom Wallet.");