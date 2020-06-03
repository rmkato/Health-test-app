import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthTestPage } from './health-test.page';

describe('HealthTestPage', () => {
  let component: HealthTestPage;
  let fixture: ComponentFixture<HealthTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
