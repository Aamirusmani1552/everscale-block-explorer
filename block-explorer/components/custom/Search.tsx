import React from "react";
import { SearchIcon } from "lucide-react";

type Props = {};

const Search = (props: Props) => {
  return (
    <form
      className="flex-1 flex items-center justify-end  h-fit"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex flex-row border-[1px] gap-2 rounded-md p-2 md:max-w-[400px] flex-1">
        <input
          type="text"
          placeholder="Enter Id of transaction, account, block..."
          className="flex-1 border-none outline-none"
        />
        <button
          type="submit"
          className="w-8 h-8 flex items-center justify-center border-none rounded-sm hover:bg-gray-500 text-white bg-black "
        >
          <SearchIcon width={18} fontSize={18} />
        </button>
      </div>
    </form>
  );
};

export default Search;
