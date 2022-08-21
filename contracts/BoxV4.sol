// // SPDX-Identifier-License: MIT
pragma solidity ^0.8.0;

import "./BoxV2.sol";
import "./BoxV3.sol";

contract BoxV4 is BoxV2 {
    string private name;

    event NameChanged(string _name);

    function setName(string memory _name) public {
        name = _name;
        emit NameChanged(_name);
    }

    function getName() public view returns (string memory) {
        return name;
    }
}
