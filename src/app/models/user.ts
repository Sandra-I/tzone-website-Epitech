import { DataType } from "./dataType";
import { Plan } from "./plan";

export interface User extends DataType {
  firstName?: string;
  lastName?: string;
  email?: string;
  isAdmin?: boolean;
  planId?: string;
  plan?: Plan;
  payment: {
    _id: string;
    date: Date;
    total: number;
    invoiceNumber: string;
  }[];
  subscription: {
    id: string,
    planName: string,
    planId: string;
    plan?: Plan;
    startDate: Date;
    endDate?: Date;
    annual: boolean;
  }[];
  billings: {
    planName: string,
    current: boolean,
    payments: { _id: string, amount: number, date: Date, number: string }[],
    next?: { amount: number, date: Date }
  }[]
}



