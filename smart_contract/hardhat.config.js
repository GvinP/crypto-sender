//  https://eth-goerli.g.alchemy.com/v2/46L4eLd46e8mIQbjxjugJBoEuHk8q_U4

require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/46L4eLd46e8mIQbjxjugJBoEuHk8q_U4',
      accounts: ['82d170cbcf1af71e601a47e55f06c596080e77e47901aebca80d229381ddcb23']
    }
  }
}