import axios from 'axios';
import { useEffect, useState } from 'react';
import { PostDataToken } from '../../store/types/post/post-types';

export const usePostSearch = (tag: string, headers?: string): PostDataToken[] => {
  const [ result, setResult ] = useState<PostDataToken[]>();

  useEffect(() => 
  {
    axios.get<PostDataToken[]>(`${ process.env.REACT_APP_SEARCH_API }?tag=%${ tag }%`, {
      headers: headers || { 'Content-Type': 'application/json' }
    })
    .then(res => { 
      if(res.status === 200 && res.statusText === "OK" && Array.isArray(res.data))
      {
        return res.data
      }
    })
    .then(data => {
      if (data !== undefined) {
        setResult(data as PostDataToken[]);
      }
    })
    .catch(e => console.log(e));

  }, [ tag, headers ]);

  return result as PostDataToken[];
};

export default usePostSearch;
