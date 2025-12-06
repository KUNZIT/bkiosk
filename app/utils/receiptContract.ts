export const RECEIPT_CONTRACT_ADDRESS = "0xYOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";

export const RECEIPT_ABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "_merchantAddress", "type": "address" },
      { "internalType": "address", "name": "_payer", "type": "address" },
      { "internalType": "uint256", "name": "_timestamp", "type": "uint256" }
    ],
    "name": "mintReceipt",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
