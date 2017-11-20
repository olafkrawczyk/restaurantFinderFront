import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbDropdownConfig]
})

export const baseURL = 'http://localhost:8080';

export class AppComponent {
  title = 'TableReserv';

  constructor(config: NgbDropdownConfig, private authService: AuthService) {
    config.placement = 'bottom-right';
  }
}
