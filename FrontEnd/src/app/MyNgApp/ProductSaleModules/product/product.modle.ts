import { ProductType } from '../ProductType/product-type.model';

export class Product {
    id: number = 0;
    name: string = '';
    description: string = '';
    price: number = 0;
    productTypeId: number = 0;
    productType: ProductType = null;
}
