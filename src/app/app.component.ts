import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GoogleAuthService } from './providers/google-auth.service';
import { PlanService } from './providers/plan.service';
import { UserService } from './providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'tzone-website';
  public googleAuth = false;

  constructor(
    private userService: UserService,
    public googleAuthService: GoogleAuthService,
    public planService: PlanService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.planService.init();
    const token = localStorage.getItem('token');
    if (token) {
      this.userService.getMe(false);
    }
    this.googleAuthService.open$.subscribe(value => this.googleAuth = value);
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.googleAuthService.open$.next(false);
    });
  }

}
