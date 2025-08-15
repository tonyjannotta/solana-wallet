# Create a Solana wallet address

* Creates a Solana wallet address using node.js
* Solana network only
* Yes, can put SPL tokens in it, e.g. POCAHAUNTUS, get some now! (shameless plug) address: 3hPqdbcGgywcgCMP7624swLddQtBXkZjz1F11269hGKj

## Prerequisites

### 1. Initialize the project (optional):

```bash
mkdir solana-wallet && cd solana-wallet
npm init -y
```

### 2. Install Solana Web3 SDK:

```bash
npm install @solana/web3.js
```

## Run it!

```bash
node create-wallet.js
```

### Example Output:

```
✅ New Solana Wallet Created:
Public Address: 9z2mCjXx1QwDsN...
🔐 Secret key saved to solana-wallet.json
```

---

## 📂 Wallet File Format

The `solana-wallet.json` file will contain the secret key as a JSON array (Uint8Array):

```json
[
  29, 84, 110, 211, 103, ...
]
```

This format is compatible with `Keypair.fromSecretKey()` for restoring the wallet later.

---

## 🔁 Restore Wallet from File (Optional)

Add this to another script if you want to reload the wallet:

```js
const secretKeyFromFile = Uint8Array.from(JSON.parse(fs.readFileSync('solana-wallet.json')));
const restoredKeypair = web3.Keypair.fromSecretKey(secretKeyFromFile);

console.log("Restored Address:", restoredKeypair.publicKey.toBase58());
```

ENJOY!