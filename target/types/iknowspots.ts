export type Iknowspots = {
  "version": "0.1.0",
  "name": "iknowspots",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [],
      "args": []
    },
    {
      "name": "eventCreation",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eventAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "eventId",
          "type": "u64"
        },
        {
          "name": "supply",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "date",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintSpot",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eventAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAtaSender",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spotNft",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverSpotAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "eventId",
          "type": "u64"
        },
        {
          "name": "eventBump",
          "type": "u8"
        },
        {
          "name": "mintPosition",
          "type": "u64"
        }
      ]
    },
    {
      "name": "burnSpot",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eventAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAtaSender",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spotNft",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverSpotAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "eventId",
          "type": "u64"
        },
        {
          "name": "eventBump",
          "type": "u8"
        },
        {
          "name": "mintPosition",
          "type": "u64"
        },
        {
          "name": "spotNftBump",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "eventAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventId",
            "type": "u64"
          },
          {
            "name": "supply",
            "type": "u64"
          },
          {
            "name": "minted",
            "type": "u64"
          },
          {
            "name": "date",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "eventManager",
            "type": "publicKey"
          },
          {
            "name": "token",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "EventNotCreated",
      "msg": "Event Creation Failed."
    },
    {
      "code": 6001,
      "name": "UserNotShortlisted",
      "msg": "User not Shortlisted."
    },
    {
      "code": 6002,
      "name": "NotEnoughFund",
      "msg": "Not Enough Funds to create Event."
    },
    {
      "code": 6003,
      "name": "TicketAlreadyClaimed",
      "msg": "This ticket is already being claimed."
    },
    {
      "code": 6004,
      "name": "EventEnded",
      "msg": "Event no longer exists."
    },
    {
      "code": 6005,
      "name": "EventAlreadyStarted",
      "msg": "Event already started."
    },
    {
      "code": 6006,
      "name": "IncorrectNftPosition",
      "msg": "Incorrect Nft Position"
    }
  ]
};

export const IDL: Iknowspots = {
  "version": "0.1.0",
  "name": "iknowspots",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [],
      "args": []
    },
    {
      "name": "eventCreation",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eventAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "eventId",
          "type": "u64"
        },
        {
          "name": "supply",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "date",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintSpot",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eventAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAtaSender",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spotNft",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverSpotAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "eventId",
          "type": "u64"
        },
        {
          "name": "eventBump",
          "type": "u8"
        },
        {
          "name": "mintPosition",
          "type": "u64"
        }
      ]
    },
    {
      "name": "burnSpot",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eventAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAtaSender",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spotNft",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverSpotAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "eventId",
          "type": "u64"
        },
        {
          "name": "eventBump",
          "type": "u8"
        },
        {
          "name": "mintPosition",
          "type": "u64"
        },
        {
          "name": "spotNftBump",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "eventAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventId",
            "type": "u64"
          },
          {
            "name": "supply",
            "type": "u64"
          },
          {
            "name": "minted",
            "type": "u64"
          },
          {
            "name": "date",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "eventManager",
            "type": "publicKey"
          },
          {
            "name": "token",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "EventNotCreated",
      "msg": "Event Creation Failed."
    },
    {
      "code": 6001,
      "name": "UserNotShortlisted",
      "msg": "User not Shortlisted."
    },
    {
      "code": 6002,
      "name": "NotEnoughFund",
      "msg": "Not Enough Funds to create Event."
    },
    {
      "code": 6003,
      "name": "TicketAlreadyClaimed",
      "msg": "This ticket is already being claimed."
    },
    {
      "code": 6004,
      "name": "EventEnded",
      "msg": "Event no longer exists."
    },
    {
      "code": 6005,
      "name": "EventAlreadyStarted",
      "msg": "Event already started."
    },
    {
      "code": 6006,
      "name": "IncorrectNftPosition",
      "msg": "Incorrect Nft Position"
    }
  ]
};
