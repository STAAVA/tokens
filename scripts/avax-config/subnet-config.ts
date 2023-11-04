import hardhat from "hardhat";
import config from "../../hardhat.config"
const avaxTestnet = "https://api.avax-test.network/ext/bc/C/rpc"
const avaxMainnet = "https://api.avax.network/ext/bc/C/rpc"
const {ethers} = hardhat;
const testnet_pk: string = ""
const mainnetXFT_pk: string = ""
const mainnetSQN_pk: string = ""
export const testnetProvider = new  ethers.JsonRpcProvider(avaxTestnet);
export const mainnetProvider = new ethers.JsonRpcProvider(avaxMainnet);
export const testnetWallet = new ethers.Wallet(testnet_pk, testnetProvider)
export const mainnetXFTWallet = new ethers.Wallet(mainnetXFT_pk, mainnetProvider)
export const mainnetSQNWallet = new ethers.Wallet(mainnetSQN_pk, mainnetProvider)