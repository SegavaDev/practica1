import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActualizarTareaComponent } from './form-actualizar-tarea.component';

describe('FormActualizarTareaComponent', () => {
  let component: FormActualizarTareaComponent;
  let fixture: ComponentFixture<FormActualizarTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormActualizarTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormActualizarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
