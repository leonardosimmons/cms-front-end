import axios, { AxiosResponse } from 'axios';
import { GetRequest } from '../../store/types';

/**
 * * Axios GET request
 * @param request - param1 = API url(s)  |  param2 = Custom Headers [Optional ]
 */
export async function get(request: GetRequest): Promise<AxiosResponse<any>> 
{
  let response: any = [];
  if (Array.isArray(request.url)) {
    request.url.map(key => axios.get<AxiosResponse<any>>(key, {
       headers: request.headers || { 'Content-Type': 'application/json' }
      })
      .then(res => {
        if (res.status === 200 && res.statusText === "OK" && Array.isArray(res.data)) {
          response.push(res.data);
        }
      })
      .catch(e => console.log(e))
    );

    return response;

  } else {
    axios.get<AxiosResponse<any>>(request.url, { 
      headers: request.headers || { 'Content-Type': 'application/json' }
    })
    .then(res => {
      if (res.status === 200 && res.statusText === "OK" && Array.isArray(res.data)) {

        response.push(res.data);
      }
    })
    .catch(e => console.log(e))

    return response;
  }
}; 




/*

export function get<T extends GetRequest>(request: T): Promise<any> 
{
export function get<T extends GetRequest>(request: T): Promise<any> 
{
  let keys: Promise<any>[] = [];
  if (Array.isArray(request.url)) {
    request.url.map(key => {
      const api: Promise<any> = axios.get(key, { 
        headers: request.headers ? request.headers : { 'Content-Type': 'application/json' 
      }});
      return keys.push(api);
    });

    return axios.all(keys)
  }

  return axios.get(request.url, { 
    headers: request.headers ? request.headers : { 'Content-Type': 'application/json' 
  }})
}

*/