import { Component, OnInit,NgZone } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
  ) {
  }

  ngOnInit() {
  }

}
