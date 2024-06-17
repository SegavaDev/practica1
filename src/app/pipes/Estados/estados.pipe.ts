import { Pipe, PipeTransform } from '@angular/core';
import { Estado } from '../../models/enums/estados.enum';

@Pipe({
  name: 'estados',
  standalone: true
})
export class EstadosPipe implements PipeTransform {

  transform(estados: Estado): String[] {
    return Object.values(estados).filter(estado => typeof estado === "string");
  }

}
