import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterChildComponent } from './router-child.component';

describe('RouterChildComponent', () => {
  let component: RouterChildComponent;
  let fixture: ComponentFixture<RouterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
