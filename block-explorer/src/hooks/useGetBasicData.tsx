import React from "react";
import { gql, useQuery } from "@apollo/client";
interface Statistics {
  transactions: {
    totalCount: number;
    lastDayCount: number;
    ratePerSecond: number;
    totalOrdinaryCount: number;
    lastDayOrdinaryCount: number;
  };
  accounts: {
    totalActiveCount: number;
    totalCount: number;
  };
  depools: {
    activeDepoolCount: number;
  };
  validators: {
    totalCount: number;
  };
}

interface Price {
  marketCap: {
    usd: number;
  };
}

interface Data {
  statistics: Statistics;
  price: Price;
}

const useGetBasicData = () => {
  const query = gql`
    query {
      statistics {
        transactions {
          totalCount
          lastDayCount
          ratePerSecond
          totalOrdinaryCount
          lastDayOrdinaryCount
        }
        accounts {
          totalActiveCount
          totalCount
        }
        depools {
          activeDepoolCount
        }
        validators {
          totalCount
        }
      }
      price {
        marketCap {
          usd
        }
      }
    }
  `;
  const { data, error, loading } = useQuery<Data>(query);

  return { data, error, loading };
};

export default useGetBasicData;
