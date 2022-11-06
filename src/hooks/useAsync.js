/**
 * Custom hook for handling asynchronous activities
 */

import { useState, useCallback, useEffect } from 'react';

const useAsyncInternal = (func, dependencies, initialLoading = true) => {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const execute = useCallback((...params) => {
    setLoading(true);

    return func(...params)
      .then((data) => {
        setValue(data);
        setError(undefined);

        // Return data so it can be used at a later time
        return data;
      })
      .catch((err) => {
        setValue(undefined);
        setError(err);

        // Return error so that it can be used at a later time
        return Promise.reject(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies); // Only refresh execute function when dependencies change

  return { loading, error, value, execute };
};

// To run automatically
const useAsync = (func, dependencies = []) => {
  const { execute, ...state } = useAsyncInternal(func, dependencies, true);

  // Immediately run
  useEffect(() => {
    execute();
  }, [execute]);

  return state;
};

// To run manually
const useAsyncFn = (func, dependencies = []) => {
  return useAsyncInternal(func, dependencies, false);
};

export { useAsync, useAsyncFn };
