// Import Solana web3 library
const web3 = require('@solana/web3.js');
const fs = require('fs');

// Generate a new keypair (wallet)
const keypair = web3.Keypair.generate();

// Convert public key to string
const publicKey = keypair.publicKey.toBase58();
const secretKey = keypair.secretKey;

// Print the wallet address
console.log("✅ New Solana Wallet Created:");
console.log("Public Address:", publicKey);

// Save secret key to a file (optional)
const saveToFile = true;
if (saveToFile) {
  const filepath = 'solana-wallet.json';
  const secretKeyArray = Array.from(secretKey);

  fs.writeFileSync(filepath, JSON.stringify(secretKeyArray));
  console.log(`🔐 Secret key saved to ${filepath}`);
}
