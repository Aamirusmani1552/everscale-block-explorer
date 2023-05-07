import React from "react";
import { gql, useQuery } from "@apollo/client";

interface Statistics {
  blocks?: {
    ratePerSecond?: number;
    countByCurrentValidators?: number;
  };
  messages?: {
    ratePerSecond?: number;
    totalCount?: number;
  };
  transactions?: {
    totalCount?: number;
    lastDayCount?: number;
    ratePerSecond?: number;
    totalOrdinaryCount?: number;
    lastDayOrdinaryCount?: number;
  };
  accounts?: {
    totalActiveCount?: number;
    totalCount?: number;
    totalSupply?: string;
    lastDayCount?: number;
  };
  depools?: {
    activeDepoolCount?: number;
    activeParticipantsCount?: number;
    totalStaked?: string;
    totalRewards?: string;
  };
  validators?: {
    totalCount?: number;
    totalStaked?: string;
    rewardsPer30Days?: string;
    lastCycleCountDelta?: number;
  };
}

type PageData = {
  statistics: Statistics;
};

const useGetBasicData = () => {
  const query = gql`
    query {
      statistics {
        blocks {
          ratePerSecond
          countByCurrentValidators
        }
        messages {
          ratePerSecond
          totalCount
        }
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
          totalSupply
          lastDayCount
        }
        depools {
          activeDepoolCount
          activeParticipantsCount
          totalStaked
          totalRewards
        }
        validators {
          totalCount
          totalStaked
          rewardsPer30Days
          lastCycleCountDelta
        }
      }
    }
  `;
  const { data, error, loading } = useQuery<PageData>(query);

  return { data, error, loading };
};

export default useGetBasicData;
