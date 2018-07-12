import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEndPointTableComponent } from './apiendpoint-table.component';

describe('ApiEndPointTableComponent', () => {
  let component: ApiEndPointTableComponent;
  let fixture: ComponentFixture<ApiEndPointTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiEndPointTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiEndPointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
