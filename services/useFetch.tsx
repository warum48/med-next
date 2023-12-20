import { useState, useEffect } from 'react';

type FetchState<T> = {
  loading: boolean;
  error: any;//Error | null;
  data: T | null;
};

export const useFetch = <T,>(url: string) => {
  const [fetchState, setFetchState] = useState<FetchState<T>>({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData: T = await response.json();
        console.log('---data---', jsonData);
        setFetchState({
          loading: false,
          error: null,
          data: jsonData,
        });
      } catch (error: any) {
        setFetchState({
          loading: false,
          error: error,
          data: null,
        });
      }
    };

    fetchData();
  }, [url]);

  return fetchState;
};

/*import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error, data };
};
*/

/*
const { loading, error, data } = useFetch<MyObjectType[]>('https://example.com/api/data');


const MyComponent = () => {
  const { loading, error, data } = useFetch('https://example.com/api/data');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};
*/