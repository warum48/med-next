import * as React from 'react';

/*


export type TSearchParamsService = {
    resetPageSearchParam: () => void;
    updatePageSearchParam: (value: string) => void;
    resetSearchSearchParam: () => void;
    updateSearchSearchParam: (value: string) => void;
  
    updateFilterSearchParam: (filter: string, value: string) => void;
    resetFilterSearchParam: (filter: string) => void;
    getSearchSearchParam: () => string;
    getPageSearchParam: () => number;
    cleanFilterParams<T>(par1: T | null, par2: string): void; //Function;
  
    updateDaySearchParam: (value: string) => void;
    resetDaySearchParam: () => void;
    updateMonthSearchParam: (value: number) => void;
    resetMonthSearchParam: () => void;
    updateYearSearchParam: (value: number) => void;
    resetYearSearchParam: () => void;
    updateTabSearchParam: (value: string) => void;
    resetTabSearchParam: () => void;
    searchParams: URLSearchParams; //any; // to have same instance to prevent collision
  };
  
  const SEARCH_PARAM_NAME__PAGE = "p";
  export const SEARCH_PARAM_NAME__SEARCH = "search";
  const SEARCH_PARAM_NAME__TAB = "tab";
  
  export const useSearchParamsService = () => {
    const [searchParams, setSearchParams] = useSearchParams();
  
    function checkAndSetSearchParams(newSearchParams: URLSearchParams) {
      const currentSearchParams = new URLSearchParams(window.location.search);
      if (newSearchParams.toString() !== currentSearchParams.toString()) {
        setSearchParams(newSearchParams);
      }
    }
  
    const SearchParamsService: TSearchParamsService = {
      searchParams: searchParams,
  
      resetPageSearchParam() {
        searchParams.delete(SEARCH_PARAM_NAME__PAGE);
        checkAndSetSearchParams(searchParams);
      },
  
      updatePageSearchParam(value: string) {
        if (value !== "undefined") {
          searchParams.set(SEARCH_PARAM_NAME__PAGE, value);
          checkAndSetSearchParams(searchParams);
        }
      },
  
      getPageSearchParam() {
        return Number(searchParams.get(SEARCH_PARAM_NAME__PAGE));
      },
  
      resetSearchSearchParam() {
        searchParams.delete(SEARCH_PARAM_NAME__SEARCH);
        searchParams.delete(SEARCH_PARAM_NAME__PAGE);
        checkAndSetSearchParams(searchParams);
      },
  
      getSearchSearchParam() {
        return searchParams.get(SEARCH_PARAM_NAME__SEARCH) || "";
      },
  
      updateSearchSearchParam(value: string) {
        searchParams.set(SEARCH_PARAM_NAME__SEARCH, value);
        searchParams.delete(SEARCH_PARAM_NAME__PAGE);
        checkAndSetSearchParams(searchParams);
      },
  
      updateFilterSearchParam(filter: string, value: string) {
        if (value.length !== 0) {
          searchParams.set(filter, value);
        }
        checkAndSetSearchParams(searchParams);
      },
  
      resetFilterSearchParam(filter: string) {
        searchParams.delete(SEARCH_PARAM_NAME__PAGE);
        searchParams.delete(filter);
        checkAndSetSearchParams(searchParams);
      },
  
      cleanFilterParams(e: any, item: string): void {
        if (e === null || e.length === 0) {
          searchParams.delete(item);
        }
        searchParams.delete(SEARCH_PARAM_NAME__PAGE);
        checkAndSetSearchParams(searchParams);
      },
  
      updateDaySearchParam(value: string) {
        searchParams.set("day", value);
        checkAndSetSearchParams(searchParams);
      },
  
      resetDaySearchParam() {
        searchParams.delete("day");
        searchParams.delete(SEARCH_PARAM_NAME__PAGE);
        checkAndSetSearchParams(searchParams);
      },
  
      updateMonthSearchParam(value: number) {
        searchParams.set("month", value.toString());
        checkAndSetSearchParams(searchParams);
      },
  
      resetMonthSearchParam() {
        searchParams.delete("month");
        searchParams.delete(SEARCH_PARAM_NAME__PAGE);
        checkAndSetSearchParams(searchParams);
      },
  
      updateYearSearchParam(value: number) {
        searchParams.set("year", value.toString());
        checkAndSetSearchParams(searchParams);
      },
  
      resetYearSearchParam() {
        searchParams.delete("year");
        searchParams.delete(SEARCH_PARAM_NAME__PAGE);
        checkAndSetSearchParams(searchParams);
      },
  
      updateTabSearchParam(value: string) {
        // searchParams.delete(SEARCH_PARAM_NAME__PAGE);
        searchParams.set("tab", value);
        checkAndSetSearchParams(searchParams);
      },
  
      resetTabSearchParam() {
        searchParams.delete(SEARCH_PARAM_NAME__TAB);
        //console.log('-=resetTabSearchParam_call')
        checkAndSetSearchParams(searchParams);
      },
    };
  
    return { SearchParamsService };
  };

  */