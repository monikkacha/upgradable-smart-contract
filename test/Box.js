const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("Box", function () {
    // variables
    let box;

    beforeEach(async () => {
        const Box = await ethers.getContractFactory('Box');
        box = await Box.deploy();
        await box.deployed();
    })

    it("Check for the value", async () => {
        await box.setValue('5');
        expect(await await box.retrieveValue()).to.equal(BigNumber.from('5'), "Value is not same");

        const valueTx = await box.setValue('10');
        const valueTxReceipt = await valueTx.wait(1);
        expect(valueTxReceipt.events[0].event).to.equal('ValueChange', 'Event didn\'t emitted from smart contract');
    })
});