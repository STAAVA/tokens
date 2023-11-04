// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "./BaseERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

abstract contract CappedERC20 is BaseERC20 {
    using SafeMath for uint256;

    uint256 private _cap_; // cap represents the total max tokens of the smart contract in circulation

    constructor(uint256 _cap) {
        require(_cap > 0, "Cap value cannot be zero");
        _cap_ = _cap;
    }

    function cap() public view returns (uint256) {
        return _cap_;
    }


    
    // function _beforeTokenTransfer(
    //     address from,
    //     address to,
    //     uint256 amount
    // ) internal  virtual override {
    //     //super._beforeTokenTransfer(from, to, amount);

    //     if (from == address(0)) {
    //         //actually the capped value is set to set totalSuppy at deploy time,
    //         //and minted to account[0]
    //         require(
    //             totalSupply().add(amount) <= _cap_,
    //             "The amount exceeds the max supply"
    //         );
    //     }
    // }
}