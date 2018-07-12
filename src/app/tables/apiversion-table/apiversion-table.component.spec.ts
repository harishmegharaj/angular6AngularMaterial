import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiVersionTableComponent } from './apiversion-table.component';

describe('ApiVersionTableComponent', () => {
  let component: ApiVersionTableComponent;
  let fixture: ComponentFixture<ApiVersionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiVersionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiVersionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
