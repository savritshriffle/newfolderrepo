import { ComponentFixture, TestBed } from '@angular/core/testing';

import { desh } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: desh;
  let fixture: ComponentFixture<desh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ desh ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(desh);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
