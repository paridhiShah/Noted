import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdbmsComponent } from './adbms.component';

describe('AdbmsComponent', () => {
  let component: AdbmsComponent;
  let fixture: ComponentFixture<AdbmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdbmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdbmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
