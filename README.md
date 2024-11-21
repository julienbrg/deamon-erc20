# Deamon ERC-20

This ERC-20 token is meant to be used for testing the Deamon Bridge. 

BASIC token is deployed to [Sepolia](https://sepolia.etherscan.io/address/0xBF3e7E14a2a9fB767C0d221b523677ACd5c149cD#writeContract#F2), [OP Sepolia](https://sepolia-optimism.etherscan.io/address/0xBF3e7E14a2a9fB767C0d221b523677ACd5c149cD#writeContract#F2) and [Base Sepolia](https://sepolia.basescan.org/address/0xBF3e7E14a2a9fB767C0d221b523677ACd5c149cD#writeContract#F2) at the same address: 

**0xBF3e7E14a2a9fB767C0d221b523677ACd5c149cD**

There is no limit set to the `mint` function.

## Supported networks

-   [OP Mainnet](https://chainlist.org/chain/10) ([docs](https://docs.optimism.io/chain/networks#op-mainnet))
-   [Sepolia Testnet](https://chainlist.org/chain/11155111) ([docs](https://ethereum.org/nb/developers/docs/networks/#sepolia))
-   [OP Sepolia Testnet](https://chainlist.org/chain/11155420) ([docs](https://docs.optimism.io/chain/networks#op-sepolia))
-   [Base Sepolia Testnet](https://chainlist.org/chain/84532) ([docs](https://docs.basescan.org/getting-started/endpoint-urls))

## Install

```
pnpm install
```

Create a `.env` file:

```
cp .env.template .env
```

Add your own keys in the `.env` file.

## Test

```
pnpm test
```

## Deploy

Make sure you deploy is from the same address. 

```
pnpm deploy:<NETWORK_NAME>
```

## Check balance

You can check the current signer wallet balance:

```
pnpm bal <NETWORK_NAME>
```

## Mint

```
pnpm mint:<NETWORK_NAME> 42
```

## Send

```
pnpm send:<NETWORK_NAME> 8
```

## Versions

-   Node [v20.9.0](https://nodejs.org/uk/blog/release/v20.9.0/)
-   PNPM [v8.7.5](https://pnpm.io/pnpm-vs-npm)
-   Hardhat [v2.19.4](https://github.com/NomicFoundation/hardhat/releases/)
-   OpenZeppelin Contracts [v5.0.1](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v5.0.1)
-   Ethers [v6.10.0](https://docs.ethers.org/v6/)

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).
