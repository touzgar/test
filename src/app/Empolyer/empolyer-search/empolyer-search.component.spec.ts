import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyerSearchComponent } from './empolyer-search.component';

describe('EmpolyerSearchComponent', () => {
  let component: EmpolyerSearchComponent;
  let fixture: ComponentFixture<EmpolyerSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpolyerSearchComponent]
    });
    fixture = TestBed.createComponent(EmpolyerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
