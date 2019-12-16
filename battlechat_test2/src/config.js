export const VIDAS_ADDRESS = '0x6bc707833cb74AcF4559daCBCc7028E920743443'

export const VIDAS_ABI =[
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "vidas",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "userId",
          "type": "string"
        },
        {
          "name": "vida",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1e736ec8"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "vidaCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x3b0f6dce"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "userId",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "vida",
          "type": "int256"
        }
      ],
      "name": "VidaCreada",
      "type": "event",
      "signature": "0x73aab6e0f0b87415cf979860f558d5d4a8202b13ccb5cad82f308ebce765e52f"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "vida",
          "type": "int256"
        }
      ],
      "name": "VidaModificada",
      "type": "event",
      "signature": "0x7fca3775f7445f8da1bb0f5ee1d591717d71a2dad5e7f34850c7765c786131ad"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_userId",
          "type": "string"
        },
        {
          "name": "_vida",
          "type": "int256"
        }
      ],
      "name": "crearVida",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x4d07157d"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "_vida",
          "type": "int256"
        }
      ],
      "name": "modificarVida",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xbafc9319"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getVida",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xbfcbd2cd"
    }
  ]