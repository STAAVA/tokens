import hardhat from "hardhat";
import {testnetProvider, testnetWallet} from "../scripts/avax-config";
import { SubnetQnodecoin } from "../typechain-types";
import {SubnetQnodecoin__factory} from "../typechain-types";
import { expect } from "chai";

const tokenAddres: string = "0x51d87a51d7e4ca182261F1A22EE3d7477cf21C17";
const walletAddress: string = ""
const zeroAddress: string = "0x0000000000000000000000000000000000000000"

const multiplier = Math.pow(10, 8)
let token: SubnetQnodecoin = SubnetQnodecoin__factory.connect(tokenAddres, testnetWallet)


describe("TestA", function(){
    it("Cannot exceed total supply", async function () {
       expect(await token.mint(walletAddress, 200000 * multiplier)).to.throw;
    })

    it("Token cannot be burnt", async function () {
        await expect(token.transfer(zeroAddress, 100 * multiplier)).to.be.revertedWith("ERC20: transfer to the zero address");
    })

    it("Token cannot be sent to the contract address", async () => {
        await expect(token.transfer(tokenAddres, 100 * multiplier)).to.be.revertedWith("Transfers to Token Contract Address Not Allowwed!");
    })
})