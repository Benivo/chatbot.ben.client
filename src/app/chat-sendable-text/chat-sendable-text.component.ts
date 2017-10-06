import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chat-sendable-text',
  templateUrl: './chat-sendable-text.component.html',
  styleUrls: ['./chat-sendable-text.component.css']
})
export class ChatSendableTextComponent implements OnInit {
  @Input() text: any
  constructor() { }

  ngOnInit() {
  }

}
