import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSendableTextComponent } from './chat-sendable-text.component';

describe('ChatSendableTextComponent', () => {
  let component: ChatSendableTextComponent;
  let fixture: ComponentFixture<ChatSendableTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSendableTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSendableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
