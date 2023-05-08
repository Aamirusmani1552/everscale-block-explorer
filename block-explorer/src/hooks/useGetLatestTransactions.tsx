import { GetLatestTransactionsQuery} from "@/__generated__/graphql";
import { GetLatestTransactions } from "@/graphql/GetLatestTransactions";
import { useQuery } from "@apollo/client";

const useGetLatestTransactions = () => {
  const {data,error, loading} = useQuery(GetLatestTransactions)
  return {data, error, loading};
};

export default useGetLatestTransactions;
