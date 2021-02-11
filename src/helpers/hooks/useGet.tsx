import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { get } from '../functions';

export const useGet = () => {
  useEffect(() => {
    async function fetchAppData() {
      try {
        const res: AxiosResponse<any> = await get({ url: 'cms-back-end/api/posts/read.php'});
        return res;
      } catch (e) {
          throw new Error('Fatal Error: Something went terribly wrong!');
      }
    }

    const test = fetchAppData()
    console.log(test);

  }, []);

};
