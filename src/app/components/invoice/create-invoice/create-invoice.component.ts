import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Invoice } from 'src/app/core/modals/invoice';
import { InvoicesRoutes } from 'src/app/core/route-segments.enum';

import { generateID } from '../../../shared/utils/utils';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {

  invoiceForm: FormGroup;
  invoices: Array<Invoice> = [];
  invoiceNumber = 1;
  editId = 0;
  invoiceLabel = 'Add invoice';
  title = 'Create Invoice';
  invoiceDetails: Invoice;
  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private router: Router,
    private activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    this.createInvoiceForm();
    if (this.editId > 0) {
      this.editInvoice(this.editId);
    }
  }
  createInvoiceForm() {
    this.invoiceForm = this.fb.group({
      invoiceAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      invoiceDate: [new Date(), [Validators.required]]
    });
  }
  addInvoice() {
    const formValues = this.invoiceForm.getRawValue();
    if (this.editId === 0) {
      this.invoices.push({
        id: generateID(),
        invoiceNumber: this.invoiceNumber++,
        invoiceAmount: parseInt(formValues.invoiceAmount, 10),
        InvoiceDate: new Date(formValues.invoiceDate.year, formValues.invoiceDate.month, formValues.invoiceDate.day)
      });
      this.invoiceForm.reset();
    } else {
      this.onUpdate();
    }

  }
  editInvoice(id) {
    this.invoiceDetails = this.invoiceService.getInvoiceDetailsById(id);
    this.invoiceForm.setValue({
      invoiceAmount: this.invoiceDetails.invoiceAmount,
      invoiceDate: this.getInvoiceDate()
    });
  }
  getInvoiceDate() {
    const invoiceDate = new Date(this.invoiceDetails.InvoiceDate);
    return {
      year: invoiceDate.getFullYear(),
      month: invoiceDate.getMonth(),
      day: invoiceDate.getDate()
    }
  }
  onSave() {
    this.invoiceService.saveInvoices(this.invoices);
    this.router.navigateByUrl(InvoicesRoutes.invoices);
  }
  onUpdate() {
    const formValues = this.invoiceForm.getRawValue();
    this.invoiceDetails.InvoiceDate = new Date(formValues.invoiceDate.year, formValues.invoiceDate.month, formValues.invoiceDate.day);
    this.invoiceDetails.invoiceAmount = parseInt(formValues.invoiceAmount, 10);
    this.invoiceService.updateInvoiceDetails(this.invoiceDetails);
    this.activeModal.close();
  }
}
