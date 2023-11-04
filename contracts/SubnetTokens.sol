//SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "./MinterRole.sol";
import "./BurnableERC20.sol";
import "./BaseERC20.sol";


contract SubnetTokens is MinterRole, BaseERC20, BurnableERC20 {
    //address private _contractsAddrress = address(this);
    
    constructor(
        string memory _tokenName,
        string memory _ticker,
        uint8 __decimals
    ) BaseERC20(_tokenName, _ticker) {
        _setupDecimals(__decimals);
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

}
