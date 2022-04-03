import { Pipe, PipeTransform } from '@angular/core';
import { page, pageTranslations } from './page-translation';
import { Translations } from "./translation"

currentLang = "fr";

/**
 * Custom translator
 */
@Pipe({
  name: 'customTranslation',
  pure: false
})
export class CustomTranslationPipe implements PipeTransform {
  generators = []

  transform(value: string, arg?: string | [page, number] | [page, number, {[key in string]: string}]): string {
    if (currentLang == 'fr') {
      return value
    }
    else if (!arg || typeof arg == 'string') {
      const translation = Translations[arg || value.toLowerCase()];
      return !translation ? value : translation[currentLang];
    }
    else if(Array.isArray(arg)){
      let translation = pageTranslations[arg[0]][currentLang][arg[1]];
      if (arg[2]) {
        for (const key in arg[2]) {
          translation = translation.replace(`{${key}}`, arg[2][key]);
        }
      }
      return !translation ? value : translation
    }
    
    return value;
  }
  
}

export function translateString(value: string, arg?: string | [page, number] | [page, number, {[key in string]: string}]): string {
  const translator = new CustomTranslationPipe();
  return translator.transform(value, arg);
}