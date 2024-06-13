import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasActivasComponent } from './tareas-activas.component';

describe('TareasActivasComponent', () => {
  let component: TareasActivasComponent;
  let fixture: ComponentFixture<TareasActivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasActivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasActivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
