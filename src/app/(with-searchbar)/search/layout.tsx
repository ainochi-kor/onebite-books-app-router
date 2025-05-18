import React, { PropsWithChildren } from "react";

const SearchLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  );
};

export default SearchLayout;
