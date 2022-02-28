import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterChild2Component } from './router-child2.component';

describe('RouterChild2Component', () => {
  let component: RouterChild2Component;
  let fixture: ComponentFixture<RouterChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
