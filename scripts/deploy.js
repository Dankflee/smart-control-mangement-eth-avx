const { ethers } = require('hardhat');

async function main() {
  const mywallet = await ethers.getContractFactory('mywallet');
  const Mywallet = await mywallet.deploy();
  await Mywallet.deployed();
  console.log('MyWallet deployed to:', Mywallet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

