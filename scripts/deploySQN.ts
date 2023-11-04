import hardhat from "hardhat"

import { SubnetQnodecoin, SubnetQnodecoin__factory } from "../typechain-types"
const deployer = ""
const deployerMainnet = ""
const tokenName = "Subnet Qnode"
const ticker = "SQN"
const decimals = BigInt(8)
const MaxSupply = BigInt(7695000 * Math.pow(10, 8))

const {ethers, network} = hardhat;
const avaxRPCUrl = "https://api.avax-test.network/ext/bc/C/rpc"
const mainnetRPCURL = "https://api.avax.network/ext/bc/C/rpc"
const provider = new ethers.JsonRpcProvider(mainnetRPCURL);

let token: SubnetQnodecoin;
const wallet = new ethers.Wallet(deployerMainnet, provider)
const tokenFactory = new SubnetQnodecoin__factory(wallet)

const deploy = async () => {
    token = await tokenFactory.deploy(tokenName, ticker, decimals, MaxSupply)
    token.getAddress().then(console.log)
}

deploy().catch(console.log)