import { useState, useEffect, useCallback } from 'react';
import { strToArr, uniqueArray } from '../functions/functions';

/**
 * * Gets the current elements tags
 * @param element
 */
export const useGetTags = (element: {tags: string}[]): string[] => {
  //*  ----------------------  STATE  ----------------------  *//
  const [ tags, setTags ] = useState<string[]>([]);

  /* Gets the current items tag list */
  const getTags = useCallback(() => {
    let arr: string[] = [];
    element.forEach(item => {
      const buffer = strToArr(item.tags);
      arr = uniqueArray(arr.concat(buffer));
    });

    return arr;
  }, [ element ]);

  useEffect(() => {
    const tags = getTags();
    setTags(tags);
  }, [ getTags ]);

  return tags;
};
