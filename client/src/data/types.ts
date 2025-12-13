export type LinkT = {
  name: string;
  path: string;
};

export type IconT = {
  icon: React.ReactNode;
  label: string;
};

export type HeroImageT = {
  src: string;
  style?: React.CSSProperties;
  rotate?: string;
};

export type EllipseT = {
  className: string;
  style: React.CSSProperties;
};

export type ProductT = {
  img: string;
  title: string;
  desc: string;
};

export type CreatorT = string; 