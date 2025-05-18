import React from "react";

const SearchPage: React.FC<{
  searchParams: Promise<{ q: string }>;
}> = async ({ searchParams }) => {
  const { q } = await searchParams;
  return <div>SearchPage: {q}</div>;
};

export default SearchPage;
