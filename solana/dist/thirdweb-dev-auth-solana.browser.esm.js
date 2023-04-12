import { T as ThirdwebAuth } from '../../dist/auth-d9d94dbd.browser.esm.js';
import { Keypair } from '@solana/web3.js';
import { KeypairWallet } from '@thirdweb-dev/wallets/solana/wallets/keypair';
import 'ethers';
import 'uuid';
import 'zod';

const authMap = new Map();
let wallet;
async function verifyLogin(domain, payload, options) {
  wallet = wallet || new KeypairWallet(Keypair.generate());
  let auth;
  if (!authMap.has(domain)) {
    auth = new ThirdwebAuth(wallet, domain);
    authMap.set(domain, auth);
  } else {
    auth = authMap.get(domain);
  }
  try {
    const address = await auth.verify(payload, options);
    return {
      address,
      error: undefined
    };
  } catch (err) {
    return {
      address: undefined,
      error: err.message
    };
  }
}

export { verifyLogin };
