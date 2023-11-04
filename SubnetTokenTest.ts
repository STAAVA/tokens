import hardhat from "hardhat";
import {testnetProvider, testnetWallet} from "./scripts/avax-config";
import { SubnetTokens } from "./typechain-types";
import {SubnetTokens__factory} from "./typechain-types";
import { expect } from "chai";

const tokenAddres: string = "0x51d87a51d7e4ca182261F1A22EE3d7477cf21C17";
const walletAddress: string = ""

const multiplier = Math.pow(10, 8)
let token: SubnetTokens = SubnetTokens__factory.connect(tokenAddres, testnetWallet)


describe("Token is Burnable", function(){
    it("Token is burnable", async function () {
       await token.burn(2000 * multiplier).then(result => {
        result.wait().then(console.log)
       })
    })
})