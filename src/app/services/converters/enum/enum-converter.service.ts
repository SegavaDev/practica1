import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnumConverterService {

  constructor() { }

  stringToEnum(enumm: any, value: string): any {
    const enumValue = Object.values(enumm).find(v => v === value);
    if (enumValue === undefined) {
      throw new Error(`El valor '${value}' no existe entre los enums.`);
    }
    return enumValue;
  }
}
