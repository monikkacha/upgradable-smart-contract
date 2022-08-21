const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory('Box');
    const box = await upgrades.deployProxy(Box, [5], { initializer: 'setValue' })
    await box.deployed();

    // log the address
    console.log('box address :', box.address);
    console.log('box implementation address :', await upgrades.erc1967.getImplementationAddress(box.address));
    console.log('box proxy admin address :', await upgrades.erc1967.getAdminAddress(box.address));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});