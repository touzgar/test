import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEmpolyerComponent } from './modifier-empolyer.component';

describe('ModifierEmpolyerComponent', () => {
  let component: ModifierEmpolyerComponent;
  let fixture: ComponentFixture<ModifierEmpolyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierEmpolyerComponent]
    });
    fixture = TestBed.createComponent(ModifierEmpolyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
