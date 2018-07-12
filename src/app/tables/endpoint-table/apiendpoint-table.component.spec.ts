import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPointTableComponent } from './endpoint-table.component';

describe('EndPointTableComponent', () => {
  let component: EndPointTableComponent;
  let fixture: ComponentFixture<EndPointTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndPointTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndPointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
