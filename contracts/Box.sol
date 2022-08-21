// SPDX-License-Identifier: MIT
// https://dev.to/yakult/tutorial-write-upgradeable-smart-contract-proxy-contract-with-openzeppelin-1916
pragma solidity ^0.8.0;

contract Box {
    uint256 private value;

    event ValueChange(uint256 newValue);

    function setValue(uint256 _value) public {
        value = _value;
        emit ValueChange(value);
    }

    function retrieveValue() public view returns (uint256) {
        return value;
    }
}
