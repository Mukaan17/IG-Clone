/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:46:56
 */
import { useState, useRef } from 'react';
import debounce from 'lodash/debounce';

import { searchUsers } from '../services/userService';

/**
 * A memoized debounced hook to search for users with a given offset
 * @function useSearchUsersDebounced
 * @returns {object} Search function and search result
 */
const useSearchUsersDebounced = () => {
  const [result, setResult] = useState([]);
  const [fetching, setFetching] = useState(false);

  const handleSearch = async (string, offset) => {
    if (!string) {
      setFetching(false);
      return setResult([]);
    }

    try {
      const response = await searchUsers(string, offset);
      setResult(response ? response : []);
      setFetching(false);
    } catch (err) {
      setFetching(false);
      throw new Error(err);
    }
  };
  const handleSearchDebounced = debounce(handleSearch, 500);
  const handleSearchDebouncedRef = useRef((string, offset) =>
    handleSearchDebounced(string, offset)
  ).current;
  return {
    handleSearchDebouncedRef,
    result,
    setResult,
    fetching,
    setFetching,
  };
};

export default useSearchUsersDebounced;
