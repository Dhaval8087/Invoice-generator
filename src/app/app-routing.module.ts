import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateInvoiceComponent } from './components/invoice/create-invoice/create-invoice.component';
import { ListInvoiceComponent } from './components/invoice/list-invoice/list-invoice.component';
import { InvoicesRoutes } from './core/route-segments.enum';

const routes: Routes = [
  {
    path: InvoicesRoutes.createinvoice,
    component: CreateInvoiceComponent,
  },
  {
    path: InvoicesRoutes.invoices,
    component: ListInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
