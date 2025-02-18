import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HafflepuffPage } from './hafflepuff.page';

describe('HafflepuffPage', () => {
  let component: HafflepuffPage;
  let fixture: ComponentFixture<HafflepuffPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HafflepuffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
