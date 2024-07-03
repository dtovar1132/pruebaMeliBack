import { Author } from "./Author.interface";
import { Product } from "./Product.interface";

export interface ResponseListProduct {
    author: Author,
    categories: string[];
    items: Product[];
}

export interface ResponseProduct {
    author: Author,
    item: Product
}
