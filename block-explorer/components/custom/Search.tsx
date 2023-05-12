import React, { useEffect, useState } from "react";
import { CrossIcon, SearchIcon, X } from "lucide-react";
import { useLazyQuery } from "@apollo/client";
import { CheckHashTypes } from "@/graphql/CheckHashType";
import { TypographyP } from "./Typography";
import Link from "next/link";

const Search = () => {
  const [type, setType] = useState("");
  const [hash, setHash] = useState("");

  const [checkType, { data }] = useLazyQuery(CheckHashTypes);

  useEffect(() => {
    if (data) {
      data.blockchain?.block
        ? setType("block")
        : data.blockchain?.message
        ? setType("message")
        : data.blockchain?.message
        ? setType("message")
        : setType("nothing matched");
    }
  }, [data]);

  useEffect(() => {
    if (hash != "") setType("");
  }, [hash]);

  return (
    <form
      className="flex-1 flex items-center justify-end  h-fit"
      onSubmit={async (e) => {
        e.preventDefault();
        if (hash == "" || !hash) return;
        await checkType({ variables: { hash: hash } });
      }}
    >
      <div className="flex flex-row border-[1px] gap-2 rounded-md relative p-2 md:max-w-[400px] flex-1">
        <input
          type="text"
          placeholder="Enter Id of transaction, account, block..."
          className="flex-1 border-none outline-none"
          onChange={(e) => {
            setHash(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-8 h-8 flex items-center justify-center border-none rounded-sm hover:bg-gray-500 text-white bg-black "
        >
          <SearchIcon width={18} fontSize={18} />
        </button>

        {type != "" && (
          <Link
            href={type != "nothing matched" ? "/" + type + "/" + hash : "#"}
          >
            <div className="absolute cursor-pointer border-[1px] rounded-sm z-10 bg-white px-4 py-2 -bottom-[50px] w-full left-0 max-w-[400px]">
              <TypographyP>
                {type} :{" "}
                {hash.toString().slice(0, 4) +
                  "..." +
                  hash.toString().slice(-4)}
              </TypographyP>
            </div>
          </Link>
        )}
      </div>
    </form>
  );
};

export default Search;
