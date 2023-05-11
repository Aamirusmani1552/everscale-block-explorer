"use client"
import { FC, ReactElement } from "react";
import { useParams } from "next/navigation";
import { TypographyH1, TypographyH3, TypographyMutedH3, TypographyTd, TypographyTr } from "../../../../components/custom/Typography";
import { useQuery } from "@apollo/client";
import { GetAccountDetails } from "@/graphql/GetAccountDetails";

const Account: FC = (): ReactElement => {
    const param = useParams()
    const {data, error, loading} = useQuery(GetAccountDetails);

    console.log(error, loading)

    if(!data){
        return <div>Loading...</div>
    }

    return <section>
        <div className="flex gap-2 items-center mt-4">
            <TypographyH3>Address: 
            </TypographyH3>
            <TypographyMutedH3>
                {param.address.slice(0, 5) + "..." + param.address.slice(-5)}
            </TypographyMutedH3>
        </div>
        
        <div className="relative overflow-x-auto rounded-sm">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <TypographyTr>
                    <TypographyTd>
                        Data:
                    </TypographyTd>
                    <TypographyTd>
                        {data.blockchain?.account?.info?.data}
                    </TypographyTd>
                </TypographyTr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
    </section>

}

export default Account