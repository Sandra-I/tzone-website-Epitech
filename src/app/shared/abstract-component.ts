import 'reflect-metadata';
import { Component, TypeDecorator } from '@angular/core';


interface AbstractComponentDecorator {
  /**
   * Custom decorator that mark a class has an `AbstractComponent`.
   */
  (obj?: AbstractComponentDef): TypeDecorator;
  new(obj: AbstractComponentDef): Component;
}


/**
 * Supplies configuration metadata for an Angular abstract component.
 */
declare interface AbstractComponentDef extends Component { }

function AbstractComponentDecoratorFunction(props: AbstractComponentDef = {}): TypeDecorator {
  props.template = '';
  return function (target: Object): void {
    const metadata = new Component(props);
    Reflect.defineMetadata('annotations', [metadata], target);
  }
}

export let AbstractComponent: AbstractComponentDecorator = AbstractComponentDecoratorFunction as AbstractComponentDecorator;

