import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { GetRequest } from '../../store/types';

//* --------------------  GENERAL  -------------------- *//
/**
 * * Converts given string into an array (cleans up whitespace as well)
 * @param str 
 */
export function strToArr(str: string): string[] {
  return str.trim().split(" ");
}

/**
 * * Merges 2 arrays together and returns a new one with all unique values
 * * [note]: removes duplicates
 * @param arr
 */
export function uniqueArray(arr: any[]) {
  const buffer: any[] = arr.concat();
  for(let i=0; i < buffer.length; ++i) 
  {
    for(let j=i+1; j < buffer.length; ++j) 
    {
      if(buffer[i] === buffer[j]) 
      {
        buffer.splice(j--, 1);
      }
    }
  }

  return buffer;
};

/**
 * * returns the number of children the element currently has
 * @param children 
 */
export function getChildrenCount(children: React.ReactNode): number {
  return React.Children.count(children)
}

/**
 * * Converts month's format from number to it's name varient
 * @param month 
 */
export function getMonthName(month: string | number) {
  switch((typeof month === 'string' ? parseInt(month) : month)) {
    case 1:
      return 'Janurary';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      break;
  };
};


//* --------------------  AXIOS  -------------------- *//

/**
 * * Axios GET with headers [OPTIONAL]
 */
export function get<T extends GetRequest>(request: T): AxiosResponse[]  
{
  let response: AxiosResponse[] = [];
  axios.get<AxiosResponse<any>>(request.url as string, 
  { 
    headers: request.headers || { 'Content-Type': 'application/json' }
  })
  .then(res => 
  {
    if (res.status === 200 && res.statusText === "OK" && Array.isArray(res.data)) 
    {
      response.push(res.data);
    }
  })
  .catch(e => console.log(e));

  return response;
};
