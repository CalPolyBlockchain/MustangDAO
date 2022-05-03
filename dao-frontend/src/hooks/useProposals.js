import { ethers } from 'ethers';
const TEST_0_CELO_CONTRACT_ADDRESS = "0x31460D7Bfe70DE16f3FeA5c0c228E20E8eB0de96";
const TEST_DAO_CONTRACT_ADDRESS = "0x31460D7Bfe70DE16f3FeA5c0c228E20E8eB0de96";
const TEST_PROPOSAL_1_ADDRESS = "";


const DaoAbi = [
    // 'function getPropsals() public view returns (address[]) {',
    'function newPropsal(string[] memory _opts, string memory title, string memory description, bool weighted, uint256 duration) public returns(uint256)',
    // 'function tickSpacing() external view returns (int24)',
    // 'function maxLiquidityPerTick() external view returns (uint128)',
  ]

export const getProposals = async (provider,tx) => {
    // const poolContract = new ethers.Contract(poolAddress,DaoAbi, provider);
    // const Proposal = {
    //     factory: await poolContract.factory(),
    //     token0: await poolContract.token0(),
    //     token1: await poolContract.token1(),
    //     fee: await poolContract.fee(),
    //     tickSpacing: await poolContract.tickSpacing(),
    //     maxLiquidityPerTick: await poolContract.maxLiquidityPerTick(),
    //   }
    //   console.log("pool immutables",Proposal);
    //   return Proposal;
    }



    export const newProposal = async (provider,title,description,weighted,duration) => {
        const poolContract = new ethers.Contract(TEST_DAO_CONTRACT_ADDRESS,DaoAbi, provider);
        const Proposal = await poolContract.newProposal(["Yes","No"],title,description,weighted,duration);
        console.log("new proposal",Proposal);
        return Proposal;
    }

