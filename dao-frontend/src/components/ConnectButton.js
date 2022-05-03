import React, { Component } from 'react';

import { ethers } from "ethers";

class ConnectButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  async connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0]);
    const balanceInEther = ethers.utils.formatEther(balance);
    const block = await provider.getBlockNumber();

    provider.on("block", (block) => {
      this.setState({ block })
    })

    this.setState({ selectedAddress: accounts[0], balance: balanceInEther, block })
  }

  renderMetamask() {
      
    if (!this.state.selectedAddress) {
      return (
        <button className='bg-yellow1 m-2 hover:bg-white font-semibold hover:text-yellow1 text-xl text-white py-2 px-4 w-40 rounded-2xl' onClick={() => this.connectToMetamask()}>Connect</button>
      )
    } else {
      return (
        <button className='bg-yellow1 m-2 hover:bg-white font-semibold hover:text-yellow1 text-xl text-white py-2 px-4 w-40 rounded-2xl'>{this.state.balance}</button>
      );
    }
  }

  loadBlock() {
    if (this.state.block) {
      return (
        <p>Block: {this.state.block}</p>
      )
    }
  }

  renderContractABI(contractAddress) {
    if (this.state.provider) {
      const contract = new ethers.Contract(this.props.contractAddress, this.props.contractABI, this.state.provider);
      return (
        <div>
          <p>Contract Address: {this.props.contractAddress}</p>
          <p>Contract ABI: {this.props.contractABI}</p>
          <p>Contract: {contract}</p>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        {this.renderMetamask()}
        {this.loadBlock()}
        {this.renderContractABI("0xe21C0139Cef8962853A6c4Ac83D0F1930D3C7C22")}
      </div>
    )
  }
}

export default ConnectButton;