"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SearchBar: React.FC = () => {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = e.currentTarget.search as HTMLInputElement;
    router.push(`/search?q=${search.value}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name={"search"} />
      <button type="submit">검색</button>
    </form>
  );
};

export default SearchBar;
