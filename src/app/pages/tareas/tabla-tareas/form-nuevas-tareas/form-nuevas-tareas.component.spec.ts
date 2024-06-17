import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevasTareasComponent } from './form-nuevas-tareas.component';

describe('FormNuevasTareasComponent', () => {
  let component: FormNuevasTareasComponent;
  let fixture: ComponentFixture<FormNuevasTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNuevasTareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNuevasTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
