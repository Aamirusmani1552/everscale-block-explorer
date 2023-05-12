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

type Props = {
  params: {
    Id: string;
  };
};

enum TransactionProcessingStatusEnum {
  Unknown,
  Preliminary,
  Proposed,
  Finalized,
  Refused,
}

const Block: FC<Props> = ({ params }): ReactElement => {
  //   if (!data) {
  //     return <div>Loading..</div>;
  //   }

  return (
    <section>
      <div className="flex gap-2 items-center mt-4">
        <TypographyH3>Block Id:</TypographyH3>
        <TypographyMutedH3>
          {params.Id.slice(0, 8) + "..." + params.Id.slice(-8)}
        </TypographyMutedH3>
      </div>

      <br />
    </section>
  );
};

export default Block;
