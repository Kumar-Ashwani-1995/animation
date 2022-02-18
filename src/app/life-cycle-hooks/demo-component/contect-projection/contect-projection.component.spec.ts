import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectProjectionComponent } from './contect-projection.component';

describe('ContectProjectionComponent', () => {
  let component: ContectProjectionComponent;
  let fixture: ComponentFixture<ContectProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContectProjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContectProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
