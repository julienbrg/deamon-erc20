import { task } from "hardhat/config"
var msg = require("cli-color").xterm(39).bgXterm(128)
import * as optimismDeploymentData from "../deployments/op-sepolia/Basic.json"
import * as sepoliaDeploymentData from "../deployments/sepolia/Basic.json"
import * as opSepoliaDeploymentData from "../deployments/op-sepolia/Basic.json"
import * as baseSepoliaDeploymentData from "../deployments/base-sepolia/Basic.json"

task("mint", "Mint a given amount of ERC-20 tokens")
    .addParam("amount")
    .setAction(async (amount, hre) => {
        const [signer] = await ethers.getSigners()
        const Basic = await ethers.getContractFactory("Basic")
        let addr
        switch (hre.network.name) {
            case "optimism":
                addr = optimismDeploymentData.address
                break
            case "sepolia":
                addr = sepoliaDeploymentData.address
                break
            case "op-sepolia":
                addr = opSepoliaDeploymentData.address
                break
            case "base-sepolia":
                addr = baseSepoliaDeploymentData.address
                break
        }
        const erc20 = new ethers.Contract(addr, Basic.interface, signer)
        const mint = await erc20.mint(await ethers.parseEther(amount.amount))
        const hash = mint.hash
        console.log(
            "Minted",
            msg(amount.amount),
            "units. \n\nTx hash:",
            msg(hash)
        )
    })
