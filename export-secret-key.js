/* DIDN'T USE - just used export-to-phantom.js */

const bs58 = require('bs58');
const secretKeyBase58 = bs58.encode(keypair.secretKey);

console.log("Private Key (Base58):", secretKeyBase58);
// Save secret key in Base58 format to a file (optional)
const saveToFileBase58 = false; //true;
if (saveToFileBase58) {
  const filepathBase58 = 'solana-wallet-base58.json';
  fs.writeFileSync(filepathBase58, JSON.stringify(secretKeyBase58));
  console.log(`🔐 Secret key in Base58 format saved to ${filepathBase58}`);
}