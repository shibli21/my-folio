/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.scss";
declare module "*.svg";
declare module "*.jpg" {
  const image: string;
  export default image;
}
declare module "*.png" {
  const image: string;
  export default image;
}
