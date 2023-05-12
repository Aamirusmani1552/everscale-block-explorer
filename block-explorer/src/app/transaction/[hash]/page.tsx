"use client";
import { FC, ReactElement, useState } from "react";
import {
  TypographyH3,
  TypographyMutedH3,
  TypographyTd,
  TypographyTr,
} from "../../../../components/custom/Typography";
import { useQuery } from "@apollo/client";
import ClipboardCopyButton from "../../../../components/custom/ClipBoardCopy";
import { GetTransactionData } from "@/graphql/GetTransactionData";
import Loading from "../../../../components/custom/Loading";

type Props = {
  params: {
    hash: string;
  };
};

enum TransactionProcessingStatusEnum {
  Unknown,
  Preliminary,
  Proposed,
  Finalized,
  Refused,
}

const Account: FC<Props> = ({ params }): ReactElement => {
  const { data, loading, error } = useQuery(GetTransactionData, {
    variables: { hash: params.hash },
  });

  if (!data) {
    return <Loading />;
  }

  const fields = [
    "Id",
    "Block Id",
    "Logical Time",
    "Destoryed",
    "aborted",
    "Boc",
    "New Hash",
    "Old Hash",
    "Total Fees",
  ];

  const values = [
    data.blockchain?.transaction?.id.toString().replace("transaction/", ""),
    data.blockchain?.transaction?.block_id,
    parseInt(data.blockchain?.transaction?.lt?.toString()!),
    data.blockchain?.transaction?.destroyed ? "True" : "False",
    data.blockchain?.transaction?.aborted ? "True" : "False",
    data.blockchain?.transaction?.boc?.toString().slice(0, 8) +
      "..." +
      data.blockchain?.transaction?.boc?.toString().slice(-8),
    data.blockchain?.transaction?.new_hash,
    data.blockchain?.transaction?.old_hash,
    parseInt(data.blockchain?.transaction?.total_fees?.toString()!) / 10 ** 9,
  ];

  const actualValues = [
    data.blockchain?.transaction?.id.toString().replace("transaction/", ""),
    data.blockchain?.transaction?.block_id,
    parseInt(data.blockchain?.transaction?.lt?.toString()!),
    data.blockchain?.transaction?.destroyed ? "True" : "False",
    data.blockchain?.transaction?.aborted ? "True" : "False",
    data.blockchain?.transaction?.boc,
    data.blockchain?.transaction?.new_hash,
    data.blockchain?.transaction?.old_hash,
    parseInt(data.blockchain?.transaction?.total_fees?.toString()!) / 10 ** 9,
  ];

  return (
    <section>
      <div className="flex gap-2 items-center mt-4">
        <TypographyH3>Transaction:</TypographyH3>
        <TypographyMutedH3>
          {params.hash.slice(0, 8) + "..." + params.hash.slice(-8)}
        </TypographyMutedH3>
      </div>

      <br />
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

            {data.blockchain?.transaction?.tokenTransfer && (
              <TypographyTr>
                <TypographyTd>
                  {" "}
                  {data.blockchain?.transaction?.tokenTransfer &&
                    "token transfer is availabe"}
                </TypographyTd>
              </TypographyTr>
            )}
          </tbody>
        </table>
      </div>
      <br />
    </section>
  );
};

export default Account;
