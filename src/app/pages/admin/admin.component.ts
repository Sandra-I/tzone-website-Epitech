import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/providers/plan.service';
import { SubscriberComponent } from 'src/app/shared/subscriber-component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends SubscriberComponent {
  public planForm!: FormGroup;
  public loadingOff$ = new Subject<void>();

  constructor(private planService: PlanService) {
    super()
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.planForm = new FormGroup({ plans: new FormArray([]) })
    this.planService.plans.forEach(plan => this.addPlanForm(plan))
  }

  public addPlanForm(plan?: Plan) {
    (this.planForm.get('plans') as FormArray).push(this.getPlanForm(plan))
  }

  public getPlanForm(plan?: Plan) {
    return new FormGroup({
      id: new FormControl(plan?._id),
      name: new FormControl(plan?.name, Validators.required),
      price: new FormControl({ value: plan?.price, disabled: !!plan?._id }),
      color: new FormControl(plan?.color),
      annuelPrice: new FormControl({ value: plan?.annuelPrice, disabled: !!plan?._id }),
      capture: new FormControl({ value: plan?.capture, disabled: !!plan?._id }),
      preview: new FormControl({ value: plan?.preview, disabled: !!plan?._id }),
      quickCapture: new FormControl({ value: plan?.quickCapture, disabled: !!plan?._id }),
      history: new FormControl({ value: plan?.history, disabled: !!plan?._id }),
      translation: new FormControl({ value: plan?.translation, disabled: !!plan?._id }),
      hidden: new FormControl(plan?.hidden)
    })
  }

  public getPlanControls(): AbstractControl[] {
    return (this.planForm.get('plans') as FormArray).controls;
  }

  public deletePlan(i: number) {
    (this.planForm.get('plans') as FormArray).removeAt(i);
  }

  public isNew(i: number) {
    return !(this.planForm.get('plans') as FormArray).at(i).value.id;
  }

  public submit(): void {
    this.subscribeTo(this.planService.create(this.planForm.value), res => {
      this.loadingOff$.next();
    }, err => this.loadingOff$.next());
  }

}
