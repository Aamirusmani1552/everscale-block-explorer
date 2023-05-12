import { gql } from "@/__generated__";

export const GetBlockData = gql(`query GetBlockData($hash:String!){
	blockchain{
    block(hash: $hash){
      id
      gen_utime
      workchain_id
      shard
      vert_seq_no
      want_merge
      want_split
    	gen_validator_list_hash_short
      tr_count
      prev_ref{
        end_lt
      }
      global_id
      end_lt
      start_lt
      after_merge
      after_split
      before_split
      gen_software_version
      key_block
      file_hash
      account_blocks{
        transactions{
        	total_fees
          transaction_id
          
        }
      }
    }
  }
}

`);
