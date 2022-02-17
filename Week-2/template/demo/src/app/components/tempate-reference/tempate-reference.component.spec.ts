import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateReferenceComponent } from './tempate-reference.component';

describe('TempateReferenceComponent', () => {
  let component: TempateReferenceComponent;
  let fixture: ComponentFixture<TempateReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempateReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
