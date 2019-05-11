import { Injectable } from '@angular/core';
import { Invoice, ListInvoice } from 'src/app/core/modals/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoices: ListInvoice;
  constructor() { }

  saveInvoices(invoices: Array<Invoice>) {
    const total = this.calculateTotal(invoices);
    this.invoices = { allInvoices: invoices, total };
  }
  calculateTotal(invoices) {
    return invoices.map(item => item.invoiceAmount)
      .reduce((prev, next) => {
        return prev + next;
      });
  }
  getInvoiceDetailsById(id: number) {
    return this.invoices.allInvoices.find(p => p.id == id);
  }
  updateInvoiceDetails(invoice: Invoice) {
    this.invoices.allInvoices.map(item => {
      if (item.id === invoice.id) {
        item = invoice;
      }
    });
    this.invoices.total = this.calculateTotal(this.invoices.allInvoices);
  }
  deleteInvoiceDetails(id) {
    this.invoices.allInvoices = this.invoices.allInvoices.filter(p => p.id != id);
    this.invoices.total = this.calculateTotal(this.invoices.allInvoices);
  }
}
