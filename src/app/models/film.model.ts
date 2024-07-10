import Product from "./product.model";

export default interface Film extends Product{
  synopsis: string;
  real: string;
}
