/**
 * * Base dot configuration
 */
export type DotsConfig = {
  slides: any[];
  activeIndex: number;
  clicked: () => void;
};


/**
 * * Current dot status
 */
export type DotStatus = {
  index: number;
  active: boolean;
  clicked: () => void;
};