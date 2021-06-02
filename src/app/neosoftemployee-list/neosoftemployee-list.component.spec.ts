import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeosoftemployeeListComponent } from './neosoftemployee-list.component';

describe('NeosoftemployeeListComponent', () => {
  let component: NeosoftemployeeListComponent;
  let fixture: ComponentFixture<NeosoftemployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeosoftemployeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeosoftemployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
