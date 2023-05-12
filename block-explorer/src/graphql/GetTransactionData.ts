import { gql } from "@/__generated__";

export const GetTransactionData = gql(`query GetTransactionsData($hash:String!){
	blockchain{
    transaction(hash: $hash){
      id
      block_id
      lt
      destroyed
      proof
      aborted
      orig_status
      end_status
      old_hash
      balance_delta
      total_fees
      new_hash
      account{
        id
        address
      }
      boc
      tokenTransfer{
        fromWallet{
          holder{
            address
          }
          address
        }
        toWallet{
          holder{
            address
          }
          address
        }
        toHolder{
          address
        }
        messageId
      }
      status
    }
  }
}`);
