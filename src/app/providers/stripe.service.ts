import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { Requester } from "./requester";

interface StripeInitResponse {
    code: number,
    result: {
        clientSecret: string
    }
}

interface PaymentRequestInterface {
    planId: string;
    annual: boolean;
}

@Injectable()
export class StripeService extends Requester {
    protected url = 'payment';

    public initPayment(body: PaymentRequestInterface): Observable<StripeInitResponse> {
        return this.httpClient.post<StripeInitResponse>(this.getUrl("init"), body)
    }

    public  addPayment(body: PaymentRequestInterface): Observable<StripeInitResponse> {
        return this.httpClient.post<StripeInitResponse>(this.getUrl("add"), body)
    }

    public getInvoice(id: string) {
        return this.httpClient.get(this.getUrl(`invoice/${id}`), { responseType: 'blob' });
    }
}