const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers, upgrades } = require("hardhat");

describe("Box", function () {
    let box;
    let boxV2;
    let boxV3;

    beforeEach(async () => {
        const Box = await ethers.getContractFactory('Box');
        const BoxV2 = await ethers.getContractFactory('BoxV2');
        const BoxV3 = await ethers.getContractFactory('BoxV3');

        box = await upgrades.deployProxy(Box, [5], { initializer: 'setValue' })
        boxV2 = await upgrades.upgradeProxy(box.address, BoxV2)
        boxV3 = await upgrades.upgradeProxy(box.address, BoxV3)
    })

    it("Check for the old value", async () => {
        expect(await boxV2.retrieveValue()).to.equal(BigNumber.from('5'), "Value is not same");
    })

    it('Increment value', async () => {
        await boxV2.increment();
        await boxV2.increment();
        expect(await boxV2.retrieveValue()).to.equal(BigNumber.from('7'), "Increment value is not same");
    })

    it('Check for the name', async () => {
        await boxV3.setName('Monik');
        const name = await boxV3.name();
        expect(name).equal('Monik');
    })
});