import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSlide } from './notification-slide';

describe('NotificationSlide', () => {
  let component: NotificationSlide;
  let fixture: ComponentFixture<NotificationSlide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationSlide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationSlide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
