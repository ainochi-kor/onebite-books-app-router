import React, { PropsWithChildren } from "react";
import SearchBar from "../../components/searchbar";

const SearchLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      {children}
    </div>
  );
};

export default SearchLayout;
