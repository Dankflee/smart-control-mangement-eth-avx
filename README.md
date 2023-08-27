# Assessment-ETH-AVAX Repository

This repository serves as the project assessment submission for the second module of the "solidity-avax-intermediate" course offered by Metacrafters Academy. The primary objective of creating this repository is to demonstrate my acquired knowledge and showcase my proficiency as a Solidity developer.

## Problem Statement

The goal of this project is to develop a basic smart contract containing 2-3 functions. These functions' values will be presented on the frontend of the application.

## Overview

This repository contains a Solidity smart contract designed to interact with the Ethereum blockchain. The contract includes several functions that establish a connection between the user's Metacrafter wallet and our platform. Among the functions, the contract features a deposit function to facilitate deposits, a withdraw function for withdrawals, and a getbalance function to display the account balance.

Integrating the Metamask wallet with our website is critical, as transaction data is linked to the wallet address. The hardhat node provides a local mainnet environment to thoroughly test the smart contract's functionality.

## Getting Started

### Running the Program

Follow these steps to execute the project:

1. Navigate to the project directory and execute the command: `npm install`
2. Open two additional terminals within your Visual Studio Code environment.
3. In the second terminal, enter: `npx hardhat node`
4. In the third terminal, execute: `npx hardhat run --network localhost scripts/deploy.js`
5. Copy the path of the `MyContract.json` file from the artifacts directory. Replace `<PATH_OF_YOUR_CONTRACT_JSON_FILE>` in `index.js` with this path.
6. Upon contract deployment, copy the contract address and replace `<YOUR_CONTRACT_ADDRESS>` in `index.js`.
7. Return to the first terminal and run `npm run dev` to launch the frontend.

Upon completion of these steps, the project will be accessible on your localhost, typically at http://localhost:3000/.

## License

This project is released under the MIT License. Refer to the LICENSE file for further details.
