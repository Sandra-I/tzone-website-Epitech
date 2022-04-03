import { FormGroup } from "@angular/forms";

export type FunctionKey<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];

export type KeyOfType<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T]

export type FormGroupKey<T> = { [K in keyof T]: T[K] extends FormGroup ? K : never }[keyof T];
export type OnlyFunction<T> = { [K in FunctionKey<T>]: Function };
export type RouterCycle = 'NavigationStart' | 'NavigationEnd' | 'NavigationCancel' | 'NavigationError';
export type InputType = 'text' | 'password' | 'number' | 'email' | 'date';
export type HttpMethod = 'GET' | 'PUT' | 'POST' | 'DELETE';
