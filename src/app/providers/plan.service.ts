import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Provider } from ".";
import { Plan } from "../models/plan";

// /** @Temp - Offres en dur **/
// export const PLANS = [{
//     name: 'Basic',
//     color: "#4897cc",
//     price: 0,
//     annuelPrice: 0,
//     capture: true,
//     preview: true,
//     quickCapture: false,
//     retrieveFont: false,
//     history: false,
//     translation: false
// }, {
//     id: '0',
//     name: 'Easy',
//     price: 1.99,
//     color: '#2f9f9e',
//     annuelPrice: 19,
//     capture: true,
//     preview: true,
//     quickCapture: true,
//     retrieveFont: false,
//     history: false,
//     translation: false
// }, {
//     id: '1',
//     name: 'Ultimate',
//     price: 6.99,
//     color: '#9c5d7a',
//     annuelPrice: 67,
//     capture: true,
//     preview: true,
//     quickCapture: true,
//     retrieveFont: true,
//     history: true,
//     translation: true
// }]

// /** @EndTemp **/


@Injectable()
export class PlanService extends Provider<Plan> {
    protected url = 'plan';
    public plans: Plan[] = []; 
    public $plans = new BehaviorSubject<Plan[]>([]);

    public init(): void {
      super.getList().subscribe(res => {
          this.plans = res;
          this.$plans.next(res);
        });
    }
}