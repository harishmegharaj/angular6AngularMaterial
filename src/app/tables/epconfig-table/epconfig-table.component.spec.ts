import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpConfigTableComponent } from './epconfig-table.component';

describe('EpConfigTableComponent', () => {
  let component: EpConfigTableComponent;
  let fixture: ComponentFixture<EpConfigTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpConfigTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpConfigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
