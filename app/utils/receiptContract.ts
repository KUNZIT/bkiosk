export const RECEIPT_CONTRACT_ADDRESS = "0xefC743C27D09d51C0dE2d78FE2c27d91f602DACE";

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
