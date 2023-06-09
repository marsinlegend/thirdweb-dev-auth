import { T as ThirdwebAuth } from '../../dist/auth-d6e69398.esm.js';
import { EthersWallet } from '@thirdweb-dev/wallets/evm/wallets/ethers';
import { ethers } from 'ethers';
export { PrivateKeyWallet } from '@thirdweb-dev/wallets/evm/wallets/private-key';
import 'uuid';
import 'zod';

const authMap = new Map();
let wallet;
async function verifyLogin(domain, payload, options) {
  wallet = wallet || new EthersWallet(ethers.Wallet.createRandom());
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
