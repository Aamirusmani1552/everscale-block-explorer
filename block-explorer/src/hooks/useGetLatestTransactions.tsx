import axios from "axios";
import React, { useEffect } from "react";

const useGetLatestTransactions = () => {
  useEffect(() => {
    axios
      .get(
        "https://everspace.center/everscale/swagger/everscale/getTransactions",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return {};
};

export default useGetLatestTransactions;
