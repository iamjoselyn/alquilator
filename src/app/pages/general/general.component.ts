import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor( private auth: AuthService ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }
}
