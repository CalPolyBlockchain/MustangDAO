// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Snapshot.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract STANG is ERC20, ERC20Snapshot, ERC20Votes {
    uint256 public s_maxSupply = 1000000;

    constructor() ERC20("MustangDAO", "STANG") ERC20Permit("GovernanceToken") {
        _mint(msg.sender, s_maxSupply);
    }

    // Token holders' voting weight is determined by a snapshot of their STANG balance AT THE TIME OF ANY NEW PROPOSAL CREATION

    function snapshot() public returns (uint256) {
        return (_snapshot());
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20Votes, ERC20Snapshot, ERC20)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20Votes)
    {
        super._burn(account, amount);
    }
}
