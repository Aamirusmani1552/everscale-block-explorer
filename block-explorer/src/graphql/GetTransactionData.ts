import { gql } from "@/__generated__";

export const GetTransactionData = gql(`query GetTransactionData($hash: String!){
  blockchain{
    transaction(hash:$hash){
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
        token{
          decimals
        	symbol
        }
        fromWallet{
          holder{
            address
          }
        }
        toWallet{
          holder{
            address
          }
        }
        value
      }
      status
      in_message{
        hash
        src
        dst
        value
        created_at_string
      }
      out_messages{
        hash
        src
        dst
        value
        created_at_string
      }
      compute{
        compute_type
        compute_type_name
        mode
        gas_fees
        gas_used
        gas_limit
        gas_credit
        msg_state_used
      	account_activated
        success
        mode
        exit_code
        vm_steps
        vm_init_state_hash
        vm_final_state_hash
        msg_state_used
      }
      action{
        success
        spec_actions
        valid
        no_funds
        result_code
        spec_actions
        tot_actions
        action_list_hash
        msgs_created
        skipped_actions
        status_change
        status_change_name
      }
      credit{
        due_fees_collected
        credit
      }
      storage{
        storage_fees_due
        status_change_name
        storage_fees_collected
      }
    }
  }
}`);
