import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Invoice } from 'src/app/core/modals/invoice';

import { CreateInvoiceComponent } from '../create-invoice/create-invoice.component';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements OnInit {

  constructor(public invoiceService: InvoiceService, private modelService: NgbModal) { }
  invoices: Array<Invoice> = [];
  ngOnInit() {
    this.loadInvoices();
  }
  loadInvoices() {
    if (this.invoiceService.invoices) {
      this.invoices = this.invoiceService.invoices.allInvoices;
    }

  }
  onEdit($event) {
    const modalRef = this.modelService.open(CreateInvoiceComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.editId = $event.currentTarget.id;
    modalRef.componentInstance.invoiceLabel = 'Update invoice';
  }
  onDelete($event) {
   this.invoiceService.deleteInvoiceDetails($event.currentTarget.id);
   this.loadInvoices();
  }
}
