import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';

@NgModule({
  declarations: [CreateInvoiceComponent, ListInvoiceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  entryComponents:[CreateInvoiceComponent]
})
export class InvoiceModule { }
