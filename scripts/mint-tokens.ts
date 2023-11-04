import hardhat from "hardhat";

import {testnetProvider, testnetWallet} from "./avax-config";

import { SubnetQnodecoin, SubnetQnodecoin__factory, SubnetTokens } from "../typechain-types";
import {SubnetTokens__factory} from "../typechain-types";

const {ethers} = hardhat
const tokenAddres: string = "0x51d87a51d7e4ca182261F1A22EE3d7477cf21C17";
const sqnTokenAddress: string = "0x77100853B81E9B413A304A6E7c89906F7bbA543f"
const walletAddress: string = ""
const multiplier = Math.pow(10, 8)
let token: SubnetTokens = SubnetTokens__factory.connect(tokenAddres, testnetWallet)
let sqnToken: SubnetQnodecoin = SubnetQnodecoin__factory.connect(sqnTokenAddress, testnetWallet);


async function mint(){
  //await token.addMinter.send(tokenAddres).then(console.log)
  await sqnToken.mint(walletAddress, (1000 * multiplier)).then(result => {
    result.wait().then(console.log)
  })
}

mint().catch(console.log)