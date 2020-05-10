import { Sale } from './sale.model';

export class SaleDetails {
    id: number = 0;
    saleId: number = 0;
    productId: number = 0;
    discount: number = 0;
    amount: number = 0;

    sale: Sale = null;
}
