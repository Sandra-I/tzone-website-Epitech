import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriberComponent } from 'src/app/shared/subscriber-component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends SubscriberComponent implements OnInit {
  @Output() clickEvent: EventEmitter<void> = new EventEmitter();
  @Input() type: string = 'button';
  @Input() text!: string | void;
  @Input() disabled?: boolean;
  @Input() style?: string;
  @Input() loadingFunction = true;
  @Input() loadingOff?: Observable<void>;
  public loading: boolean = false;
 
  constructor() {
    super()
  }

  ngOnInit() {
    if (this.loadingOff) {
      this.subscribeTo(this.loadingOff, () => {this.loading = false})
    }
  }

  onClick(): void {
    if (this.clickEvent.observers.length) {
      this.clickEvent.emit()
    }
    if (this.loadingOff) {
      this.loading = this.loadingFunction;
    }
  }

  enterPressed(){
    if(!this.disabled && this.type === "submit"){
      this.loading = this.loadingFunction;
      this.clickEvent.emit()
    }
  }

}
