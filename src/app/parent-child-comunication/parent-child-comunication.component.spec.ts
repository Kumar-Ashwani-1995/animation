import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildComunicationComponent } from './parent-child-comunication.component';

describe('ParentChildComunicationComponent', () => {
  let component: ParentChildComunicationComponent;
  let fixture: ComponentFixture<ParentChildComunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildComunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildComunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
