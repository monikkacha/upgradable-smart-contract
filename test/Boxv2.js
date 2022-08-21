const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

describe("BoxV2", async () => {

    let box;

    beforeEach(async () => {
        const BoxV2 = await ethers.getContractFactory('BoxV2');
        box = await BoxV2.deploy();
        await box.deployed();
    })

    it('Check for the value', async () => {
        await box.setValue('5');
        expect(await box.retrieveValue()).to.be.equal(BigNumber.from('5'));
    })

    it('Increment value', async () => {
        await box.setValue('11');
        await box.increment();
        const number = await box.retrieveValue();
        expect(number).to.be.equal(BigNumber.from('12'));
    })
})