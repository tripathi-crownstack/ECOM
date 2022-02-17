import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountLocalVarComponent } from './count-local-var.component';

describe('CountLocalVarComponent', () => {
  let component: CountLocalVarComponent;
  let fixture: ComponentFixture<CountLocalVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountLocalVarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountLocalVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
