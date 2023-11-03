import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatBotTestPart } from './chatBotTest.part';

describe('ChatBotTestPart', () => {
  let component: ChatBotTestPart;
  let fixture: ComponentFixture<ChatBotTestPart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatBotTestPart],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatBotTestPart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
