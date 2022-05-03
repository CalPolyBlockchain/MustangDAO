import "./STANG.sol";

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
    mapping(uint256 => Proposal) public proposals;

    uint256 propsIdCnt = 0;

    constructor(address _daoToken) {
        daoToken = STANG(_daoToken);
    }

    //optsString[], title, description, propId, endTimestamp
    event newProposal(string[], string, string, uint256, uint256);

    //walletAddr, amount, propId, optionId, message
    event newVote(address, uint256, uint256, uint256, string);

    function newPropsal(
        string[] memory _opts,
        string memory title,
        string memory description,
        bool weighted,
        uint256 duration
    ) public returns (uint256) {
        uint256 propId = propsIdCnt;

        for (uint256 opts = 0; opts < _opts.length; opts++) {
            proposals[propId].opts.push(0);
        }
        proposals[propId].weighted = weighted;
        proposals[propId].duration = duration;
        proposals[propId].timestamp = block.timestamp;
        proposals[propId].proposalId = propId;
        proposals[propId].snapshotId = daoToken.snapshot();
        proposals[propId].author = msg.sender;
        proposals[propId].totalVotes = 0;

        uint256 endTimestamp = block.timestamp + duration;

        propsIdCnt++;
        emit newProposal(_opts, title, description, propId, endTimestamp);
        return propId;
    }

    function vote(
        uint256 amount,
        uint256 proposalId,
        uint256 option,
        string memory message
    ) public {
        //Require Proposals Active
        require(
            block.timestamp <
                proposals[proposalId].timestamp + proposals[proposalId].duration
        );

        //If there is wighted voting, ensure amount == 1, and voter has only voted once.
        if (!proposals[proposalId].weighted) {
            require(amount == 1);
            require(proposals[proposalId].votingAloc[msg.sender] == 0);
        }

        //require the amount user is voting plus their prev votes <= their balance at the snapshot
        uint256 userSnapshotBal = daoToken.balanceOfAt(
            msg.sender,
            proposals[proposalId].snapshotId
        );
        uint256 alreadyCastVotes = proposals[proposalId].votingAloc[msg.sender];
        require(userSnapshotBal >= amount + alreadyCastVotes);

        proposals[proposalId].opts[option] += amount;
        proposals[proposalId].totalVotes += amount;

        emit newVote(msg.sender, amount, proposalId, option, message);
    }
}
