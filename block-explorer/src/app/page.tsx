"use client";

import Header from "../../components/custom/Header";
import useGetBasicData from "@/hooks/useGetBasicData";

export default function Home() {
  const { data, loading, error } = useGetBasicData();

  if (loading) {
    return <div>Loading..</div>;
  }

  console.log(data);
  return (
    <main className="flex px-2 md:px-8 min-h-screen flex-col ">
      <Header />
      <div className="px-4 py-2 rounded-lg">
        <div>{data?.statistics.accounts?.totalCount}</div>
      </div>
    </main>
  );
}
