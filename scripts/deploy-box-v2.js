const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {
    const ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

    // run chain on same node
    const BoxV2 = await ethers.getContractFactory('BoxV2');
    const boxv2 = await upgrades.upgradeProxy('0x0165878A594ca255338adfa4d48449f69242Eb8F', BoxV2)

    // log the address
    console.log('box address :', boxv2.address);
    console.log('box implementation address :', await upgrades.erc1967.getImplementationAddress(boxv2.address));
    console.log('box proxy admin address :', await upgrades.erc1967.getAdminAddress(boxv2.address));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});