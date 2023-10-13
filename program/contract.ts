import * as anchor from '@coral-xyz/anchor';
import type NodeWallet from '@coral-xyz/anchor/dist/cjs/nodewallet';
import * as spl from '@solana/spl-token';

import type { Iknowspots } from './program';
import { IDL } from './program';

const PROGRAM_ID = "5DZ3TPTSjmBUMRzyQJUrj2mSULMU1CP3Q9WTP3Ytere4";

const RPC_URL = "https://solana-devnet.g.alchemy.com/v2/cXvNycNK9Q6-fBqXiB1AUDkj9OQ1aNAn";

export const connection = new anchor.web3.Connection(RPC_URL, 'confirmed');

export const getProvider = (wallet: anchor.Wallet) => {
    const opts = {
      preflightCommitment: 'processed' as anchor.web3.ConfirmOptions,
    };
  
    const provider = new anchor.AnchorProvider(
      connection,
      wallet,
      opts.preflightCommitment
    );
    return provider;
  };

  export const anchorProgram = (wallet: anchor.Wallet) => {
    const provider = getProvider(wallet);
    const idl = IDL as anchor.Idl;
    const program = new anchor.Program(
      idl,
      PROGRAM_ID,
      provider
    ) as unknown as anchor.Program<Iknowspots>;
  
    return program;
  };