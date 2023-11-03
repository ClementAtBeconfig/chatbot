import { Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'chat-bot-test',
  templateUrl: './chatBotTest.part.html',
  styleUrls: ['./chatBotTest.part.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ChatBotTestPart {
  displayBot(){
    const chat = document.getElementById("chat") as HTMLInputElement ;
    chat.style.display="block";
  }
  closeChat(){
    const chat = document.getElementById("chat") as HTMLInputElement ;
    chat.style.display="none";
  }
  messageSubmit(){
    const message = document.getElementById("messageContainer")as HTMLInputElement;
    const texte = message.value.trim();
    message.value='';
    const msg= ('<div class="message message-personal">' + texte + '</div>');
  }

  
}
