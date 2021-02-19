import { useState, useEffect, useRef } from 'react';

interface FetchState {
  data: any,
  loading: boolean
};

export const useFetch = (url: string) => {
  const isCurrent = useRef<boolean>(true); // makes sure it is always a current fetch request
  const [ state, setState ] = useState<FetchState>({ data: null, loading: true });

  useEffect(() => {
    // called when the component is unmounted
    return () => {
      isCurrent.current = false; // ends current state change
    }
  }, []);

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }))
    fetch(url)
      .then(response => {
        if (response.ok && response.headers.get("Content-Type") === 'application/json') {
          return response.json;
        }})
      .then(data => {
        if (isCurrent.current) {
          setState({ data: data, loading: false });
        }
      })
  }, [ url ]);

  return state;
}