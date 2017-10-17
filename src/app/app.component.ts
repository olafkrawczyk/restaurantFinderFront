import { Component } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbDropdownConfig]
})
export class AppComponent {
  title = 'TableReserv';

  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }
}
