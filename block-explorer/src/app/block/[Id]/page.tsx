"use client";
import { FC, ReactElement, useState } from "react";
import {
  TypographyH3,
  TypographyLarge,
  TypographyMutedH3,
  TypographyTd,
  TypographyTr,
} from "../../../../components/custom/Typography";
import { useQuery } from "@apollo/client";
import ClipboardCopyButton from "../../../../components/custom/ClipBoardCopy";
import { GetBlockData } from "@/graphql/GetBlockData";
import Loading from "../../../../components/custom/Loading";
import Error from "../../../../components/custom/Error";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import Link from "next/link";

type Props = {
  params: {
    Id: string;
  };
};

const Block: FC<Props> = ({ params }): ReactElement => {
  const { data, error, loading } = useQuery(GetBlockData, {
    variables: { hash: params.Id },
  });

  if (!data) {
    return <Loading />;
  }

  if(!data.blockchain?.block){
    return <Error />
  }

  const fields = [
    "Id",
    "Shard",
    "Transactions Count",
    "File Hash",
    "After Merge",
    "After Split",
    "Before Split",
    "End Logical time",
    "Want Merge",
    "Want Split",
    "Time",
    "Vertical Sequence No.",
    "Global Id",
    "Validator List Hash Short",
    "Generated by Software Version",
  ];

  const values = [
    data.blockchain?.block?.id.toString().replace("block/", ""),
    data.blockchain?.block?.shard,
    data.blockchain?.block?.tr_count,
    data.blockchain?.block?.file_hash ? data.blockchain.block.file_hash : "NA",
    data.blockchain?.block?.after_merge ? "True" : "False",
    data.blockchain?.block?.after_split ? "True" : "False",
    data.blockchain?.block?.before_split ? "True" : "False",
    parseInt(data.blockchain?.block?.end_lt?.toString()!),
    data.blockchain?.block?.want_merge ? "True" : "False",
    data.blockchain?.block?.want_split ? "True" : "False",
    data.blockchain?.block?.gen_utime,
    data.blockchain?.block?.vert_seq_no,
    data.blockchain?.block?.global_id,
    data.blockchain?.block?.gen_validator_list_hash_short,
    data.blockchain?.block?.gen_software_version,
  ];

  const actualValues = [
    data.blockchain?.block?.id.toString().replace("block/", ""),
    data.blockchain?.block?.shard,
    data.blockchain?.block?.tr_count,
    data.blockchain?.block?.file_hash ? data.blockchain.block.file_hash : "NA",
    data.blockchain?.block?.after_merge ? "True" : "False",
    data.blockchain?.block?.after_split ? "True" : "False",
    data.blockchain?.block?.before_split ? "True" : "False",
    parseInt(data.blockchain?.block?.end_lt?.toString()!),
    data.blockchain?.block?.want_merge,
    data.blockchain?.block?.want_split,
    data.blockchain?.block?.gen_utime,
    data.blockchain?.block?.vert_seq_no,
    data.blockchain?.block?.global_id,
    data.blockchain?.block?.gen_validator_list_hash_short,
    data.blockchain?.block?.gen_software_version,
  ];

  return (
    <section>
      <div className="flex gap-2 items-center mt-4">
        <TypographyH3>Block Id:</TypographyH3>
        <TypographyMutedH3>
          {params.Id.slice(0, 8) + "..." + params.Id.slice(-8)}
        </TypographyMutedH3>
      </div>
      <br></br>
      <div className="relative overflow-x-auto rounded-sm">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            {fields.map((f, i) => {
              return (
                <TypographyTr key={i}>
                  <TypographyTd>{f}</TypographyTd>
                  <TypographyTd>
                    <div className="flex items-center justify-between group">
                      <span className="cursor-pointer">{values[i]}</span>{" "}
                      <span className="hidden group-hover:block absolute right-3">
                        <ClipboardCopyButton
                          text={actualValues[i]?.toString()!}
                        />
                      </span>
                    </div>
                  </TypographyTd>
                </TypographyTr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <br />

      <Tabs defaultValue="Account Block" className="w-full">
        <TabsList>
          <TabsTrigger value="Account Block">Account Block</TabsTrigger>
          <TabsTrigger value="Message">Message</TabsTrigger>
          <TabsTrigger value="Value Flow">Value Flow</TabsTrigger>
        </TabsList>
        <TabsContent value="Account Block">
          <div className="relative overflow-x-auto rounded-sm">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <TypographyTr>
                  {[
                    "Account Block",
                    "Account",
                    "New Hash",
                    "Old Hash",
                    "Transaction Count",
                  ].map((item, key) => {
                    return <TypographyTd key={key}>{item}</TypographyTd>;
                  })}
                </TypographyTr>
              </thead>
              <tbody>
                {data.blockchain?.block?.account_blocks?.map((f, i) => {
                  const accountFiels = [
                    f?.account_addr,
                    f?.new_hash,
                    f?.old_hash,
                    f?.tr_count,
                  ];
                  return (
                    <TypographyTr key={i}>
                      <TypographyTd>{"Account Block " + i}</TypographyTd>
                      {accountFiels.map((field, key) => {
                        return (
                          <TypographyTd key={key}>
                            {field != f?.tr_count
                              ? field?.toString().slice(0, 8) +
                                "..." +
                                field?.toString().slice(-8)
                              : field}
                          </TypographyTd>
                        );
                      })}
                    </TypographyTr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="Message">
          <br />
          <TypographyLarge>Incoming Messages</TypographyLarge>
          <br />
          <div className="relative overflow-x-auto rounded-sm">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <TypographyTr>
                  {["No.", "Message Id", "Message Type", "Transaction Id"].map(
                    (item, key) => {
                      return <TypographyTd key={key}>{item}</TypographyTd>;
                    }
                  )}
                </TypographyTr>
              </thead>
              <tbody>
                {data.blockchain?.block?.in_msg_descr?.map((f, i) => {
                  const accountFields = [
                    i,
                    f?.msg_id ? f.msg_id : "NA",
                    f?.msg_type,
                    f?.transaction_id,
                  ];
                  return (
                    <TypographyTr key={i}>
                      <TypographyTd>{accountFields[0]}</TypographyTd>
                      <TypographyTd>
                        <Link
                          href={"/message/" + accountFields[1]}
                          className="hover:underline underline-offset-2"
                        >
                          {accountFields[1]}
                        </Link>
                      </TypographyTd>
                      <TypographyTd>{accountFields[2]}</TypographyTd>
                      <TypographyTd>
                        <Link
                          href={"/transaction/" + accountFields[3]}
                          className="hover:underline underline-offset-2"
                        >
                          {accountFields[3]}
                        </Link>
                      </TypographyTd>
                    </TypographyTr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <br />
          <TypographyLarge>Outgoing Messages</TypographyLarge>
          <br />
          <div className="relative overflow-x-auto rounded-sm">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <TypographyTr>
                  {["No.", "Message Id", "Message Type", "Transaction Id"].map(
                    (item, key) => {
                      return <TypographyTd key={key}>{item}</TypographyTd>;
                    }
                  )}
                </TypographyTr>
              </thead>
              <tbody>
                {data.blockchain?.block?.out_msg_descr?.map((f, i) => {
                  const accountFields = [
                    i,
                    f?.msg_id ? f.msg_id : "NA",
                    f?.msg_type,
                    f?.transaction_id,
                  ];
                  return (
                    <TypographyTr key={i}>
                      <TypographyTd>{accountFields[0]}</TypographyTd>
                      <TypographyTd>
                        <Link
                          href={"/message/" + accountFields[1]}
                          className="hover:underline underline-offset-2"
                        >
                          {accountFields[1]}
                        </Link>
                      </TypographyTd>
                      <TypographyTd>{accountFields[2]}</TypographyTd>
                      <TypographyTd>
                        <Link
                          href={"/transaction/" + accountFields[3]}
                          className="hover:underline underline-offset-2"
                        >
                          {accountFields[3]}
                        </Link>
                      </TypographyTd>
                    </TypographyTr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="Value Flow">
          <div className="relative overflow-x-auto rounded-sm">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
              <tbody>
                {[
                  parseInt(
                    data.blockchain?.block?.value_flow?.created?.toString()!
                  ) /
                    10 ** 9,
                  parseInt(
                    data.blockchain?.block?.value_flow?.imported?.toString()!
                  ) /
                    10 ** 9,
                  parseInt(
                    data.blockchain?.block?.value_flow?.from_prev_blk?.toString()!
                  ) /
                    10 ** 9,
                  parseInt(
                    data.blockchain?.block?.value_flow?.exported?.toString()!
                  ) /
                    10 ** 9,
                  parseInt(
                    data.blockchain?.block?.value_flow?.minted?.toString()!
                  ) /
                    10 ** 9,
                  parseInt(
                    data.blockchain?.block?.value_flow?.to_next_blk?.toString()!
                  ) /
                    10 ** 9,
                ].map((f, i) => {
                  const valueFlowFields = [
                    "Created",
                    "Imported",
                    "From Previous Block",
                    "Exported",
                    "Minted",
                    "To Next Block",
                  ];
                  return (
                    <TypographyTr key={i}>
                      <TypographyTd>{valueFlowFields[i]}</TypographyTd>
                      <TypographyTd>{f} Ever</TypographyTd>
                    </TypographyTr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
      <br />
    </section>
  );
};

export default Block;
