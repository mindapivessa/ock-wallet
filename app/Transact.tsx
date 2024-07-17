'use client';
import { useCallback, useState } from 'react';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { 
  Transaction, 
  TransactionGasFee, 
  TransactionGasFeeLabel, 
  TransactionGasFeeEstimate, 
  TransactionGasFeeSponsor, 
  TransactionButton, 
  TransactionStatus, 
  TransactionStatusLabel, 
  TransactionStatusAction 
} from '@coinbase/onchainkit/transaction'; 
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount } from 'wagmi';
 
const myNFTABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', type: 'address' }],
    name: 'safeMint',
    outputs: [],
  },
] as const;
const myNFTAddress = '0x119Ea671030FBf79AB93b436D2E20af6ea469a19';
 
function TransactionComponents() {
  const { address } = useAccount();
 
  const contracts = [
    {
      address: myNFTAddress,
      abi: myNFTABI,
      functionName: 'safeMint',
      args: [address],
    },
    {
      address: myNFTAddress,
      abi: myNFTABI,
      functionName: 'safeMint',
      args: [address],
    },
  ];
 
//   const swappableTokens: Token[] = [ ... ];
 
  return address ? (
    <Transaction
      address={address} 
      contracts={contracts} 
    > 
      <TransactionButton /> 
      <TransactionGasFee> 
        <TransactionGasFeeLabel /> 
        <TransactionGasFeeEstimate /> 
        <TransactionGasFeeSponsor /> 
      </TransactionGasFee> 
      <TransactionStatus> 
        <TransactionStatusLabel /> 
        <TransactionStatusAction /> 
      </TransactionStatus> 
    </Transaction> 
  ) : (
    <Wallet>
      <ConnectWallet>
        <Avatar className="h-6 w-6" />
        <Name />
      </ConnectWallet>
    </Wallet>
  );
}

export default TransactionComponents;