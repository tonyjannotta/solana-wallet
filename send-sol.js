const web3 = require('@solana/web3.js');
const fs = require('fs');

// Load your sender wallet
const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync('solana-wallet.json')));
const senderKeypair = web3.Keypair.fromSecretKey(secretKey);

// Set up connection (devnet for testing)
const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

// Define recipient address and amount
const recipientAddress = 'RECIPIENT_PUBLIC_KEY_HERE'; // replace this
const amountInSol = 0.01;
const lamports = web3.LAMPORTS_PER_SOL * amountInSol;

(async () => {
  // Create transaction
  const transaction = new web3.Transaction().add(
    web3.SystemProgram.transfer({
      fromPubkey: senderKeypair.publicKey,
      toPubkey: new web3.PublicKey(recipientAddress),
      lamports: lamports,
    })
  );

  // Send and confirm transaction
  const signature = await web3.sendAndConfirmTransaction(connection, transaction, [senderKeypair]);

  console.log(`✅ Sent ${amountInSol} SOL to ${recipientAddress}`);
  console.log('🔗 Explorer:', `https://explorer.solana.com/tx/${signature}?cluster=devnet`);
})();
// Handle errors
process.on('unhandledRejection', (error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});