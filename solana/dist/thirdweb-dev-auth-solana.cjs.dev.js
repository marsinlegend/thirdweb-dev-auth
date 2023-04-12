'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var auth = require('../../dist/auth-f16271b6.cjs.dev.js');
var web3_js = require('@solana/web3.js');
var keypair = require('@thirdweb-dev/wallets/solana/wallets/keypair');
require('ethers');
require('uuid');
require('zod');

const authMap = new Map();
let wallet;
async function verifyLogin(domain, payload, options) {
  wallet = wallet || new keypair.KeypairWallet(web3_js.Keypair.generate());
  let auth$1;
  if (!authMap.has(domain)) {
    auth$1 = new auth.ThirdwebAuth(wallet, domain);
    authMap.set(domain, auth$1);
  } else {
    auth$1 = authMap.get(domain);
  }
  try {
    const address = await auth$1.verify(payload, options);
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

exports.verifyLogin = verifyLogin;
