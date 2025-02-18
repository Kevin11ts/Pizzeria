import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GryffinderPage } from './gryffinder.page';

describe('GryffinderPage', () => {
  let component: GryffinderPage;
  let fixture: ComponentFixture<GryffinderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GryffinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
