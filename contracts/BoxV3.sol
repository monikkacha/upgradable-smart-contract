// SPDX-Identifier-License: MIT
pragma solidity ^0.8.0;

import "./BoxV2.sol";

contract BoxV3 is BoxV2 {
    string public name;

    event NameChanged(string _name);

    function setName(string memory _name) public {
        name = _name;
        emit NameChanged(_name);
    }
}
