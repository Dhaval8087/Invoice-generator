import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDatepickerModule,
    NgbModalModule,
  ],
  exports: [
    HeaderComponent,
    NgbDatepickerModule
  ]
})
export class SharedModule { }
