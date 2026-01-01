const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("ERC20FromScratch");

  const token = await Token.deploy(
    "MyToken",
    "MTK",
    1_000_000
  );

  await token.waitForDeployment();

  console.log("ERC20 deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
