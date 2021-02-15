/**
 * * Base arrow configuration
 */
export type ArrowConfig = {
  index: number;
  direction: string;
  clicked: () => void;
};

/**
 * * Base arrow styles
 */
export type ArrowStyles = {
  container: {
    right: string;
    left: string;
  },
  arrow: {
    transform: string;
  }
};