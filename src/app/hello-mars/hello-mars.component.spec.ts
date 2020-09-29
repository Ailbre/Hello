import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMarsComponent } from './hello-mars.component';

describe('HelloMarsComponent', () => {
  let component: HelloMarsComponent;
  let fixture: ComponentFixture<HelloMarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloMarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloMarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
