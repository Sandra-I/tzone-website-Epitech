import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, iif, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Provider } from ".";
import { User } from "../models/user";
import { translateString } from "../shared/custom-translation/custom-translation.pipe";
import { Toastr } from "../shared/notification";
import { PlanService } from "./plan.service";


@Injectable()
export class UserService extends Provider<User> {
    protected url = 'user';
    public currentUser$ = new BehaviorSubject<User | null>(null);
    public loading$ = new BehaviorSubject(false);

    constructor(private router: Router, private planService: PlanService) {
        super();
    }

    public create = (): Observable<{ id: string }> => { throw new Error() };

    public getMe(message: boolean, path?: string): void {
        this.loading$.next(true);
        this.httpClient.get<User>(this.getUrl('me')).pipe(map(user => this._setBillingInfos(user))).toPromise()
            .then(me => {
                if (message) {
                    !me.isAdmin && Toastr.success(`${translateString('Content de te voir')}, ${me.firstName} !`);
                    me.isAdmin && Toastr.success(`Content de vous voir, patron !`);
                }
                const currentSubscription = me.subscription.find(res => !res.endDate);
                if (currentSubscription) {
                    me.planId = currentSubscription.planId;
                }
                this.currentUser$.next(me);
                if (me.isAdmin) this.router.navigateByUrl('admin')
                else if (path) this.router.navigateByUrl(path);
            })
            .catch((err) => {
                console.error(err);
                localStorage.removeItem('token')
            })
            .finally(() => this.loading$.next(false));
    }
    /** @Todo - Format billing array */
    private _setBillingInfos(user: User): User {
        user.billings = [];
        let currentPaymentIndex = 0;
        if (user.payment.length) {
            user.subscription.forEach(subscription => {
                const endDate = subscription.endDate ? new Date(subscription.endDate) : null;
                const newSubscription: typeof user.billings[number] = {
                    planName: this.planService.plans.find((plan) => plan._id == subscription.planId)!.name,
                    payments: [],
                    current: !endDate
                }
                for (currentPaymentIndex; currentPaymentIndex < user.payment.length; currentPaymentIndex++) {
                    const current = user.payment[currentPaymentIndex];
                    const date = new Date(current.date);
                    if (!endDate || date.getTime() < endDate.getTime()) {
                        newSubscription.payments.push({
                            _id: current._id, date,
                            amount: current.total,
                            number: current.invoiceNumber
                        });
                    }
                    else break;
                }
                if (!endDate) {
                    const lastPayment = newSubscription.payments[newSubscription.payments.length - 1];
                    const date = new Date(lastPayment.date);
                    if (subscription.annual) date.setFullYear(date.getFullYear() + 1);
                    else date.setMonth(date.getMonth() + 1);
                    newSubscription.next = { date, amount: lastPayment.amount };
                }
                newSubscription.payments.reverse()
                user.billings.push(newSubscription);
            })
        }
        user.billings.reverse();
        return user;
    }

    public cancelSubscription(): Observable<void> {
        return this.httpClient.get<void>(this.getUrl('cancel'));
    }

}