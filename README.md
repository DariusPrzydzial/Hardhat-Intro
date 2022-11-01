# Hardhat Introduction

Built with the [A gentle introduction to Hardhat](https://coinsbench.com/a-gentle-introduction-to-hardhat-fd862d180b28) article.

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npm init -y
npm install --save-dev hardhat
npx hardhat
> Create a JavaScript project.
npm install --save-dev "hardhat@^2.12.1" 
npm add --dev @nomiclabs/hardhat-etherscan
npm add --dev dotenv
npx hardhat help
npx hardhat test                    // tests Lock.sol, not SimplaStorage.sol
REPORT_GAS=true npx hardhat test    // tests Lock.sol, not SimplaStorage.sol
npx hardhat compile
npx hardhat run scripts/deploy.js --network hardhat
npx hardhat run scripts/deploy.js --network goerli
npx hardhat verify --network goerli ADDRESS
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```