import { SaleDetails } from './sale-details.model';

export class Sale {
    id: number = 0;
    name: string = '';
    date: Date = new Date();
    description: string = '';

    saleDetails: SaleDetails = null;
}
