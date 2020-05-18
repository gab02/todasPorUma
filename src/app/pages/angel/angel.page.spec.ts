import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngelPage } from './angel.page';

describe('AngelPage', () => {
  let component: AngelPage;
  let fixture: ComponentFixture<AngelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
