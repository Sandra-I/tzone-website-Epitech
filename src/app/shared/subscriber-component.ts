import { OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { first } from "rxjs/operators";
import { AbstractComponent } from "./abstract-component";
import { APIError } from "./api-error";

@AbstractComponent()
export class SubscriberComponent implements OnDestroy {
    private _subscription = new Subscription();

    public ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
    
    protected subscribeTo<T>(
        observable: Observable<T>,
        callback: (value: T) => void,
        onError?: (error: APIError) => void,
        ephemeral: boolean = false): void {
        if (ephemeral) {
          observable.pipe(first()).subscribe(callback, onError);
        }
        else {
          this._subscription.add(observable.subscribe(callback, onError));
        }
      }
}