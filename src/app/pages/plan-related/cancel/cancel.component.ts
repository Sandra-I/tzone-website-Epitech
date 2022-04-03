import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/providers/plan.service';
import { UserService } from 'src/app/providers/user.service';
import { SubscriberComponent } from 'src/app/shared/subscriber-component';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent extends SubscriberComponent implements OnInit {
  public plan!: Plan;
  public cancelled = false;
  public loadingOff$ = new Subject<void>();
  public loading = false;
  
  constructor(
    private planService: PlanService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    super();

  }

  ngOnInit() {
    this.subscribeTo(this.userService.currentUser$, user => {
      const id = user?.planId;
      if (id) {
        this.subscribeTo(this.planService.getById(id), plan => {
          this.plan = plan
        }, () => this.back());
      }
      else {
        this.back();
      }
    })
  }

  public async cancel(): Promise<void> {
    this.loading = true;
    this.userService.cancelSubscription().subscribe(() => {
      this.loading = false;
      this.loadingOff$.next();
      this.userService.getMe(false);
      this.cancelled = true;
      const queryString = window.location.search;
      const parameters = new URLSearchParams(queryString);
      const red = parameters.get('red') || 'offers';
      setTimeout(() => this.router.navigateByUrl(red || ''), 1000)
    })
  }

  public back(): void {
    this.router.navigateByUrl('offers')
  }
}
