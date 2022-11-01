// 1 - imports
const { ethers, run, network } = require('hardhat')

// 2 - async main function
async function main() {
  // create an instance of `SimpleStorage.sol` contract
  const SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
  console.log('Deploying contract...⏳')

  // deploy the contract on the blockchain
  const simpleStorage = await SimpleStorageFactory.deploy()

  // wait till the contract gets deployed
  await simpleStorage.deployed()

  console.log(`Network ID: ${network.config.chainId}`)
  console.log(`Contract deployed at: ${simpleStorage.address}`)
  
  // check if the network is goerli & Etherscan API exists
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API) {
    console.log('Waiting for block confirmation... ⏳')
    await simpleStorage.deployTransaction.wait(5) // wait for 6 block confirmations

    await verify(simpleStorage.address, []) // run verification
  }
}

// programmatically verify contract source code
async function verify(contractAddress, args) {
  console.log('Verifying Contract...✨')

  try {
    await run('verify:verify', {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes('already verified')) {
      console.log('Already verified!')
    } else {
      console.log(e)
    }
  }
}

// 3 - call main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })