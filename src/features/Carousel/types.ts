//*  ----------------------  STATE  ----------------------  *// 
export type CarouselStatus = {
  translate: number;
  transition: number;
  activeIndex: number;
  slideCount: number;
  dotCount: number[];
  width: number;
};

//*  ----------------------  CONTENT  ---------------------  *// 
export type CarouselContentProps = {
  width: number;
  translate: number;
  transition: number;
  slideCount: (count: number) => void;
  dotCount?: (dots: number) => void;
  height?: number;  
}

export type CarouselContentStyles = {
  width: string;
  height: string;
  transform: string;
  transition: string;
  readonly display: string;
};