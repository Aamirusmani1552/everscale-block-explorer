"use client";

import Header from "../../components/custom/Header";
import useGetBasicData from "@/hooks/useGetBasicData";
import InfoCard from "../../components/custom/InfoCard";
import CurrencyInfoCard from "../../components/custom/CurrencyInfoCard";
import useGetLatestTransactions from "@/hooks/useGetLatestTransactions";

export default function Home() {
  const { data } = useGetBasicData();
  useGetLatestTransactions();

  if (!data) {
    return <div>Loading..</div>;
  }

  console.log(data);
  return (
    <main className="flex px-2 md:px-8 min-h-screen flex-col ">
      <Header />
      <section>
        {/* chain basic info */}
        <div className="rounded-lg py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <InfoCard
              itemName={"Total Transactions"}
              value={BigInt(data.statistics.transactions.totalCount)}
            />

            <InfoCard
              itemName={"Total Validators"}
              value={BigInt(data.statistics.validators.totalCount)}
            />

            <InfoCard
              itemName={"Total Active Depools"}
              value={BigInt(data.statistics.depools.activeDepoolCount)}
            />
            <InfoCard
              itemName={"TPS"}
              value={data.statistics.transactions.ratePerSecond}
            />

            <CurrencyInfoCard
              itemName="Ever MarketCap"
              value={BigInt(data.price.marketCap.usd)}
            />
          </div>
        </div>

        {/* Block Info */}
      </section>
    </main>
  );
}
