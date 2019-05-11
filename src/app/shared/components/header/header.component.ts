import { Component, OnInit } from '@angular/core';
import { InvoicesRoutes } from 'src/app/core/route-segments.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  InvoicesRoutes = InvoicesRoutes;
  constructor() { }

  ngOnInit() {
  }

}
