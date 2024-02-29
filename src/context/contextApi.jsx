import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);
  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then((res) => {
      setSearchResult(res);
      setLoading(false);
    });
  };
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
