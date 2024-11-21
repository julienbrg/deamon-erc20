import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre
    const { deterministic } = deployments
    const { deployer } = await getNamedAccounts()

    const initialMint = await hre.ethers.parseEther("10000")

    const { address, deploy } = await deterministic("Basic", {
        from: deployer,
        args: [initialMint],
        salt: hre.ethers.id("Basic.v1"),
        log: true,
        waitConfirmations: 5
    })

    console.log("Please wait for 5 confirmations...")

    await deploy()

    console.log("Basic token deployed at:", address)

    if (hre.network.name !== "hardhat") {
        try {
            await hre.run("verify:verify", {
                address: address,
                constructorArguments: [initialMint]
            })
        } catch (err) {
            console.log("Verification failed:", err)
        }
    }
}

func.tags = ["Basic"]
export default func
