require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.0",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      {
        version: "0.4.0",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      // {
      //   version: "0.7.0",
      //   settings: {
      //     optimizer: {
      //      enabled: true,
      //      runs: 200,
      //     },
      //     metadata: {
      //       // do not include the metadata hash, since this is machine dependent
      //       // and we want all generated code to be deterministic
      //       // https://docs.soliditylang.org/en/v0.7.6/metadata.html
      //       bytecodeHash: 'none',
      //     },
      //   }
      // },
      {
        version: "0.7.0",
        settings: {
          evmVersion: 'istanbul',
          optimizer: {
            enabled: true,
            runs: 500,
          },
          metadata: {
            bytecodeHash: 'none',
          },
        }
      },
      // {
      //   version: "0.7.6",
      //   settings: {
      //     optimizer: {
      //      enabled: true,
      //      runs: 500,
      //     }
      //   }
      // },
      {
        version: "0.8.27",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      {
        version: "0.6.0",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      {
        version: "0.6.2",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      {
        version: "0.5.16",
        settings: {
           optimizer: {
            enabled: true,
            runs: 1000,
           }
         }
      },
    ]
  },
};
