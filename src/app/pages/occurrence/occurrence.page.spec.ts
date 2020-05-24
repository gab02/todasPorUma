import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OccurrencePage } from './occurrence.page';

describe('OccurrencePage', () => {
  let component: OccurrencePage;
  let fixture: ComponentFixture<OccurrencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurrencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OccurrencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
