import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { User } from 'src/app/models/user';
import { GoogleAuthService } from 'src/app/providers/google-auth.service';
import { PlanService } from 'src/app/providers/plan.service';
import { UserService } from 'src/app/providers/user.service';
import { SubscriberComponent } from 'src/app/shared/subscriber-component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent extends SubscriberComponent implements OnInit {
  public annual = false;
  public currentPlanHover = false;
  public plans!: Plan[];
  public user!: User;

  constructor(
    private router: Router,
    private planService: PlanService,
    private userService: UserService,
    private googleService: GoogleAuthService
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscribeTo(this.userService.currentUser$, user => {
      if (user) {
        this.user = user;
      }
    });
    this.subscribeTo(this.planService.$plans, plans => this.plans = plans);
  }

  public choosePlan(plan: Plan): void {
    if (plan._id == this.user?.planId) {
      this.router.navigate(['cancel'])
    }
    else {
      if (this.user?.planId) {
        this.router.navigate(['cancel'], {queryParams: {red: 'purchase/' + plan._id, annual: this.annual }})
      }
      else {
        if (this.user) {
          this.router.navigate(['purchase/' + plan._id, { annual: this.annual }])
        }
        else {
          this.googleService.logIn();
        }
      }
    }
  }

}
