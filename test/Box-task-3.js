const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers, upgrades } = require("hardhat");

describe("Box", function () {
    let box;
    let boxV2;

    beforeEach(async () => {
        const Box = await ethers.getContractFactory('Box');
        const BoxV2 = await ethers.getContractFactory('BoxV2');

        box = await upgrades.deployProxy(Box, [5], { initializer: 'setValue' })
        // await box.deployed();

        boxV2 = await upgrades.upgradeProxy(box.address, BoxV2)
    })

    it("Check for the old value", async () => {
        expect(await boxV2.retrieveValue()).to.equal(BigNumber.from('5'), "Value is not same");
    })

    it('Increment value', async () => {
        await boxV2.increment();
        await boxV2.increment();
        expect(await boxV2.retrieveValue()).to.equal(BigNumber.from('7'), "Increment value is not same");
    })
});