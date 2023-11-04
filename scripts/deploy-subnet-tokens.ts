import   hardhat   from "hardhat"

import { SubnetTokens, SubnetTokens__factory } from "../typechain-types";

const deployer = ""
const deployerMainnet = ""
const tokenName = "Fishfarm Token"
const ticker = "XFT"
const decimals = BigInt(8)
const {ethers, network} = hardhat;
const avaxRPCUrl = "https://api.avax-test.network/ext/bc/C/rpc"
const mainnetRPCURL = "https://api.avax.network/ext/bc/C/rpc"
const provider = new ethers.JsonRpcProvider(mainnetRPCURL);

let token: SubnetTokens;
const wallet = new ethers.Wallet(deployerMainnet, provider)
const tokenFactory = new SubnetTokens__factory(wallet)
const deploy = async () => {
  token = await tokenFactory.deploy(tokenName, ticker, decimals)
  token.getAddress().then(console.log)
}
deploy().catch(error=> console.log(error));

//testnet address: 0x51d87a51d7e4ca182261F1A22EE3d7477cf21C17
//mainnet address: 0x8dd5bd69914730D1c0fa91313e0D8DeA61f34417