import { Component } from '@angular/core';
import { ChatBotTestPart } from '@beconfig/chatbot';

@Component({
  standalone: true,
  imports: [ChatBotTestPart],
  selector: 'chat-bot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chat-bot';
}
