const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {
    // run chain on same node
    const BoxV3 = await ethers.getContractFactory('BoxV3');
    const boxV3 = await upgrades.upgradeProxy('0x610178dA211FEF7D417bC0e6FeD39F05609AD788', BoxV3)

    // log the address
    console.log('box address :', boxV3.address);
    console.log('box implementation address :', await upgrades.erc1967.getImplementationAddress(boxV3.address));
    console.log('box proxy admin address :', await upgrades.erc1967.getAdminAddress(boxV3.address));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});