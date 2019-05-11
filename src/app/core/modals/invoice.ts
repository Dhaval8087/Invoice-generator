export interface Invoice {
  id: number;
  invoiceNumber?: number;
  invoiceAmount?: number;
  InvoiceDate?: any;
}
export interface ListInvoice {
  allInvoices: Array<Invoice>;
  total: number;
}
