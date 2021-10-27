const NFTLAB = artifacts.require("NFTLAB");

module.exports = function (deployer) {
  deployer.deploy(NFTLAB, "NFTLAB", "NTL", "cfxtest:aapvb2c9a1jy9uk26rybmhcruz64g0zp46v3h1wru2");
};
