export interface IImgURL {
  blurHeight: number;
  blurWidth: number;
  height: number;
  src: string;
  width: number;
}

export interface ISvgURL extends IImgURL {}

export interface INavLinks {
  href: string;
  label: string;
}

export interface IStatistics {
  value: string;
  label: string;
}

export interface IProducts {
  imgURL: IImgURL;
  name: string;
  price: string;
}

export interface IShoes {
  thumbnail: ISvgURL;
  bigShoe: IImgURL;
}

export interface IServices {
  imgURL: ISvgURL;
  label: string;
  subtext: string;
}

export interface IReviews {
  imgURL: IImgURL;
  customerName: string;
  rating: number;
  feedback: string;
}

interface links {
  name: string;
  link: string;
}

export interface IFooterLinks {
  title: string;
  links: links[];
}

export interface ISocialMedia {
  src: ISvgURL;
  alt: string;
}
