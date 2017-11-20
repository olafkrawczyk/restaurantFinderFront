import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

export const baseURL = 'http://localhost:8080';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbDropdownConfig]
})
export class AppComponent {
  title = 'TableReserv';

  constructor(config: NgbDropdownConfig, private authService: AuthService) {
    config.placement = 'bottom-right';
  }
}
