// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "./BaseERC20.sol";
import "./CappedERC20.sol";
import "./MinterRole.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract SubnetQnodecoin is MinterRole, BaseERC20, CappedERC20 {
    
    constructor(
        string memory tokenName_, 
        string memory ticker_, 
        uint8 decimals_, 
        uint256 cappedAmount_) 
    BaseERC20(tokenName_, ticker_ ) CappedERC20(cappedAmount_){
        _setupDecimals(decimals_);
    }  

     function transfer(address recipient, uint256 amount)
        public
        override
        notContractAddress(recipient, amount)
        returns (bool)
    {
        return super.transfer(recipient, amount);
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public override notContractAddress(recipient, amount) returns (bool) {
        return super.transferFrom(sender, recipient, amount);
    }

    //only deployer grants this role
    function mint(address account, uint256 amount)
        public
        onlyMinter
        returns (bool)
    {
        _mint(account, amount);
        return true;
    }


    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal  override {
        super._beforeTokenTransfer(from, to, amount);

        /*
        * total supply in circulation is only increases when new tokens are minted
        * so we enusre that the new the amount to be minted does not
        * exceeds the capped amount
        */  
        if (from == address(0)) {
            require(
                SafeMath.add(totalSupply(), amount) <= cap(),
                "The amount exceeds the max supply"
            );
        }
    }
}

