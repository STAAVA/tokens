import hardhat from "hardhat";

import {testnetProvider, mainnetSQNWallet} from "../avax-config";

import { SubnetQnodecoin__factory, SubnetQnodecoin } from "../../typechain-types";
//import {SubnetTokens__factory} from "../../typechain-types";

const {ethers} = hardhat
const tokenAddres: string = "0x46efa41D18462c4308288Cf0Dc72Da4485dA4D01";
const walletAddress: string = ""
const multiplier = Math.pow(10, 8)
let token: SubnetQnodecoin = SubnetQnodecoin__factory.connect(tokenAddres, mainnetSQNWallet)

async function mint(){
  //await token.addMinter.send(tokenAddres).then(console.log)
  await token.mint(walletAddress, (2498455.417773 * multiplier)).then(result => {
    result.wait().then(console.log)
  })
}

mint().catch(console.log)