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
    "query GetLatestTransactions{\n\tblockchain{\n    transactions(first: 10){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}": types.GetLatestTransactionsDocument,
    "\n    query GetNetworkInfo{\n      statistics {\n        transactions {\n          totalCount\n          lastDayCount\n          ratePerSecond\n          totalOrdinaryCount\n          lastDayOrdinaryCount\n        }\n        accounts {\n          totalActiveCount\n          totalCount\n        }\n        depools {\n          activeDepoolCount\n        }\n        validators {\n          totalCount\n        }\n      }\n      price {\n        marketCap {\n          usd\n        }\n      }\n    }\n  ": types.GetNetworkInfoDocument,
    "query GetNextTransactions($after:String!){\n\tblockchain{\n    transactions(first: 10, after:$after){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}": types.GetNextTransactionsDocument,
    "query GetPreviousTransactions($before:String!){\n\tblockchain{\n    transactions(before:$before){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}": types.GetPreviousTransactionsDocument,
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
export function gql(source: "query GetLatestTransactions{\n\tblockchain{\n    transactions(first: 10){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}"): (typeof documents)["query GetLatestTransactions{\n\tblockchain{\n    transactions(first: 10){\n      edges{\n        node{\n          block_id\n          workchain_id\n          account{\n            address\n          }\n        \tid\n        }\n      }\n      pageInfo{\n        endCursor\n        startCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n  }\n}"];
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

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;