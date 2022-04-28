import "STANG.sol";

pragma solidity ^0.8.4;

contract DAO {
    struct Proposal {
        uint256[] opts;
        bool weighted;
        uint256 timestamp;
        uint256 duration;
        uint256 proposalId;
        uint256 snapshotId;
        address author;
        //userWallet => votes casted
        mapping(address => uint256) votingAloc;
        uint256 totalVotes;
    } 

    STANG daoToken;

    //proposalId => Proposal
    mapping(uint256 => Proposal) propsals;

    uint256 propsIdCnt = 0;

    constructor(address _daoToken){
        daoToken = STANG(_daoToken);
    }  

    //optsString[], title, description, propId, endTimestamp
    event newProposal(string[], string, string, uint256, uint256);

    //walletAddr, amount, propId, optionId, message
    event newVote(address, uint256, uint256, uint256, string);

    function newPropsal(string[] memory _opts, string memory title, string memory description, bool weighted, uint256 duration) public returns(uint256){        
        uint256 propId = propsIdCnt;

        for(uint256 opts=0; opts < _opts.length; opts++){
            propsals[propId].opts.push(0);
        }
        propsals[propId].weighted = weighted;
        propsals[propId].duration = duration;
        propsals[propId].timestamp = block.timestamp;
        propsals[propId].proposalId = propId;
        propsals[propId].snapshotId = daoToken.snapshot();
        propsals[propId].author = msg.sender;
        propsals[propId].totalVotes = 0;

        uint256 endTimestamp = block.timestamp+duration;

        propsIdCnt++;
        emit newProposal(_opts, title, description, propId, endTimestamp);
        return propId;
    }

    function vote(uint256 amount, uint256 proposalId, uint256 option, string memory message) public {

        //Require Proposals Active
        require(block.timestamp < propsals[proposalId].timestamp+propsals[proposalId].duration);

        //If there is wighted voting, ensure amount == 1, and voter has only voted once.
        if(!propsals[proposalId].weighted){
            require(amount == 1);
            require(propsals[proposalId].votingAloc[msg.sender] == 0);
        }

        //require the amount user is voting plus their prev votes <= their balance at the snapshot
        uint256 userSnapshotBal = daoToken.balanceOfAt(msg.sender, propsals[proposalId].snapshotId);
        uint256 alreadyCastVotes = propsals[proposalId].votingAloc[msg.sender];
        require(userSnapshotBal >= amount+alreadyCastVotes);

        propsals[proposalId].opts[option] += amount;
        propsals[proposalId].totalVotes += amount;

        emit newVote(msg.sender, amount, proposalId, option, message);
    }   
}