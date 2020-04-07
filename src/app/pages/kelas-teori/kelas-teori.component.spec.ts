import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelasTeoriComponent } from './kelas-teori.component';

describe('KelasTeoriComponent', () => {
  let component: KelasTeoriComponent;
  let fixture: ComponentFixture<KelasTeoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelasTeoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelasTeoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
