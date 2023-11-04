import hardhat from "hardhat";

import {testnetProvider, mainnetXFTWallet} from "../avax-config";

import { SubnetTokens__factory, SubnetTokens } from "../../typechain-types";
//import {SubnetTokens__factory} from "../../typechain-types";

const {ethers} = hardhat
const tokenAddres: string = "0x8dd5bd69914730D1c0fa91313e0D8DeA61f34417";
const walletAddress: string = ""
const multiplier = Math.pow(10, 8)
let token: SubnetTokens = SubnetTokens__factory.connect(tokenAddres, mainnetXFTWallet)

async function mint(){
  //await token.addMinter.send(tokenAddres).then(console.log)
  await token.mint(walletAddress, (6054782.692238 * multiplier)).then(result => {
    result.wait().then(console.log)
  })
}

mint().catch(console.log)