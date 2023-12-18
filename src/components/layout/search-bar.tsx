"use client";

import { Input } from "@chakra-ui/react";
import { useDataContext } from "../providers/DataContext";
import { ChangeEvent, useEffect, useState } from "react";

const SearchBar = ({}) => {
  const { state, dispatch } = useDataContext()!;
  const [query, setQuery] = useState(state.query)

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch({type: 'CHANGE_QUERY', value: query});
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  return (
    <div>
      <Input
        focusBorderColor="teal.400"
        placeholder="search"
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}
        width="auto"
        htmlSize={10}
      />
    </div>
  );
};

export default SearchBar;
