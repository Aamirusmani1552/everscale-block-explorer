/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetAccountDetails($address:String!){\n\tblockchain{\n\t\taccount(address:$address){\n      info{\n        state_hash\n        balance\n        last_paid\n        id\n        code\n        boc\n        code_hash\n        data\n        acc_type_name\n        data_hash\n      }\n    }\n  }\n}": types.GetAccountDetailsDocument,
    "query GetBlockData($hash:String!){\n\tblockchain{\n    block(hash: $hash){\n      id\n      gen_utime\n      workchain_id\n      shard\n      vert_seq_no\n      want_merge\n      want_split\n    \tgen_validator_list_hash_short\n      tr_count\n      prev_ref{\n        end_lt\n      }\n      global_id\n      end_lt\n      start_lt\n      after_merge\n      after_split\n      before_split\n      gen_software_version\n      key_block\n      file_hash\n      account_blocks{\n        account_addr\n        tr_count\n        old_hash\n        new_hash\n      }\n      in_msg_descr{\n        msg_type\n        transaction_id\n        msg_id\n      }\n      \n      out_msg_descr{\n        msg_type\n        transaction_id\n        msg_id\n      }\n      value_flow{\n        from_prev_blk\n        to_next_blk\n        exported\n        imported\n        created\n        minted\n      }\n    }\n  }\n}\n": types.GetBlockDataDocument,
    "query GetLatestTransactions{\n\tblockchain{\n    transactions(first: 10){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}": types.GetLatestTransactionsDocument,
    "query GetMessageData($hash:String!){\n    blockchain{\n      message(hash: $hash){\n        id\n        msg_type_name\n        src\n        hash\n        body_hash\n        status_name\n        bounced\n        dst\n        created_at_string\n      }\n    }\n  }\n  ": types.GetMessageDataDocument,
    "\n    query GetNetworkInfo{\n      statistics {\n        transactions {\n          totalCount\n          lastDayCount\n          ratePerSecond\n          totalOrdinaryCount\n          lastDayOrdinaryCount\n        }\n        accounts {\n          totalActiveCount\n          totalCount\n        }\n        depools {\n          activeDepoolCount\n        }\n        validators {\n          totalCount\n        }\n      }\n      price {\n        marketCap {\n          usd\n        }\n      }\n    }\n  ": types.GetNetworkInfoDocument,
    "query GetNextTransactions($after:String!){\n\tblockchain{\n    transactions(first: 10, after:$after){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}": types.GetNextTransactionsDocument,
    "query GetPreviousTransactions($before:String!){\n\tblockchain{\n    transactions(before:$before){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}": types.GetPreviousTransactionsDocument,
    "query GetTransactionsData($hash:String!){\n\tblockchain{\n    transaction(hash: $hash){\n      id\n      block_id\n      lt\n      destroyed\n      proof\n      aborted\n      orig_status\n      end_status\n      old_hash\n      balance_delta\n      total_fees\n      new_hash\n      account{\n        id\n        address\n      }\n      boc\n      tokenTransfer{\n        fromWallet{\n          holder{\n            address\n          }\n          address\n        }\n        toWallet{\n          holder{\n            address\n          }\n          address\n        }\n        toHolder{\n          address\n        }\n        messageId\n      }\n      status\n    }\n  }\n}": types.GetTransactionsDataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAccountDetails($address:String!){\n\tblockchain{\n\t\taccount(address:$address){\n      info{\n        state_hash\n        balance\n        last_paid\n        id\n        code\n        boc\n        code_hash\n        data\n        acc_type_name\n        data_hash\n      }\n    }\n  }\n}"): (typeof documents)["query GetAccountDetails($address:String!){\n\tblockchain{\n\t\taccount(address:$address){\n      info{\n        state_hash\n        balance\n        last_paid\n        id\n        code\n        boc\n        code_hash\n        data\n        acc_type_name\n        data_hash\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetBlockData($hash:String!){\n\tblockchain{\n    block(hash: $hash){\n      id\n      gen_utime\n      workchain_id\n      shard\n      vert_seq_no\n      want_merge\n      want_split\n    \tgen_validator_list_hash_short\n      tr_count\n      prev_ref{\n        end_lt\n      }\n      global_id\n      end_lt\n      start_lt\n      after_merge\n      after_split\n      before_split\n      gen_software_version\n      key_block\n      file_hash\n      account_blocks{\n        account_addr\n        tr_count\n        old_hash\n        new_hash\n      }\n      in_msg_descr{\n        msg_type\n        transaction_id\n        msg_id\n      }\n      \n      out_msg_descr{\n        msg_type\n        transaction_id\n        msg_id\n      }\n      value_flow{\n        from_prev_blk\n        to_next_blk\n        exported\n        imported\n        created\n        minted\n      }\n    }\n  }\n}\n"): (typeof documents)["query GetBlockData($hash:String!){\n\tblockchain{\n    block(hash: $hash){\n      id\n      gen_utime\n      workchain_id\n      shard\n      vert_seq_no\n      want_merge\n      want_split\n    \tgen_validator_list_hash_short\n      tr_count\n      prev_ref{\n        end_lt\n      }\n      global_id\n      end_lt\n      start_lt\n      after_merge\n      after_split\n      before_split\n      gen_software_version\n      key_block\n      file_hash\n      account_blocks{\n        account_addr\n        tr_count\n        old_hash\n        new_hash\n      }\n      in_msg_descr{\n        msg_type\n        transaction_id\n        msg_id\n      }\n      \n      out_msg_descr{\n        msg_type\n        transaction_id\n        msg_id\n      }\n      value_flow{\n        from_prev_blk\n        to_next_blk\n        exported\n        imported\n        created\n        minted\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetLatestTransactions{\n\tblockchain{\n    transactions(first: 10){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}"): (typeof documents)["query GetLatestTransactions{\n\tblockchain{\n    transactions(first: 10){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetMessageData($hash:String!){\n    blockchain{\n      message(hash: $hash){\n        id\n        msg_type_name\n        src\n        hash\n        body_hash\n        status_name\n        bounced\n        dst\n        created_at_string\n      }\n    }\n  }\n  "): (typeof documents)["query GetMessageData($hash:String!){\n    blockchain{\n      message(hash: $hash){\n        id\n        msg_type_name\n        src\n        hash\n        body_hash\n        status_name\n        bounced\n        dst\n        created_at_string\n      }\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetNetworkInfo{\n      statistics {\n        transactions {\n          totalCount\n          lastDayCount\n          ratePerSecond\n          totalOrdinaryCount\n          lastDayOrdinaryCount\n        }\n        accounts {\n          totalActiveCount\n          totalCount\n        }\n        depools {\n          activeDepoolCount\n        }\n        validators {\n          totalCount\n        }\n      }\n      price {\n        marketCap {\n          usd\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GetNetworkInfo{\n      statistics {\n        transactions {\n          totalCount\n          lastDayCount\n          ratePerSecond\n          totalOrdinaryCount\n          lastDayOrdinaryCount\n        }\n        accounts {\n          totalActiveCount\n          totalCount\n        }\n        depools {\n          activeDepoolCount\n        }\n        validators {\n          totalCount\n        }\n      }\n      price {\n        marketCap {\n          usd\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetNextTransactions($after:String!){\n\tblockchain{\n    transactions(first: 10, after:$after){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}"): (typeof documents)["query GetNextTransactions($after:String!){\n\tblockchain{\n    transactions(first: 10, after:$after){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetPreviousTransactions($before:String!){\n\tblockchain{\n    transactions(before:$before){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}"): (typeof documents)["query GetPreviousTransactions($before:String!){\n\tblockchain{\n    transactions(before:$before){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetTransactionsData($hash:String!){\n\tblockchain{\n    transaction(hash: $hash){\n      id\n      block_id\n      lt\n      destroyed\n      proof\n      aborted\n      orig_status\n      end_status\n      old_hash\n      balance_delta\n      total_fees\n      new_hash\n      account{\n        id\n        address\n      }\n      boc\n      tokenTransfer{\n        fromWallet{\n          holder{\n            address\n          }\n          address\n        }\n        toWallet{\n          holder{\n            address\n          }\n          address\n        }\n        toHolder{\n          address\n        }\n        messageId\n      }\n      status\n    }\n  }\n}"): (typeof documents)["query GetTransactionsData($hash:String!){\n\tblockchain{\n    transaction(hash: $hash){\n      id\n      block_id\n      lt\n      destroyed\n      proof\n      aborted\n      orig_status\n      end_status\n      old_hash\n      balance_delta\n      total_fees\n      new_hash\n      account{\n        id\n        address\n      }\n      boc\n      tokenTransfer{\n        fromWallet{\n          holder{\n            address\n          }\n          address\n        }\n        toWallet{\n          holder{\n            address\n          }\n          address\n        }\n        toHolder{\n          address\n        }\n        messageId\n      }\n      status\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;