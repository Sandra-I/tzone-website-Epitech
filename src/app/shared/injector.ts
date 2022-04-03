import { Injector, Type } from '@angular/core';

export const injector: { get: Injector['get'] } = {get: () => null};

export const setInjector = (injectorRef?: Injector): void => {
  injector.get = <T>(injection: Type<T>) => injectorRef?.get(injection);
};
4