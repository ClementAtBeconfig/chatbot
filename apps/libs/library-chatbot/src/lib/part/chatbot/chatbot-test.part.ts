import { Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'chat-bot-test',
  templateUrl: './chatbot-test.part.html',
  styleUrls: ['./chatbot-test.part.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ChatBotTestPart {
  
  displayBot(){
    const chat = document.getElementById("chat") as HTMLInputElement ;
    chat.style.display="block";
    const displayBot = document.getElementById("displayBot") as HTMLInputElement ;
    displayBot.style.display="none";
  }
  
  closeChat(){
    const chat = document.getElementById("chat") as HTMLInputElement ;
    chat.style.display="none";
    const displayBot = document.getElementById("displayBot") as HTMLInputElement ;
    displayBot.style.display="block";
    const notif = document.getElementById("notif") as HTMLInputElement ;
    notif.style.display="none";

   
  }
  messageSubmit(){
    const message = document.getElementById("messageContainer")as HTMLInputElement;
    const texte = message.value.trim();
    message.value='';
    if (texte !== '') {
      const divMessageUtilisateur = document.createElement('div');
      divMessageUtilisateur.className = 'messages-user';
      divMessageUtilisateur.textContent = texte;
      const contenuMessages = document.querySelector('.messages-user')as HTMLInputElement;
      contenuMessages.style.visibility="visible";
      contenuMessages.appendChild(divMessageUtilisateur);
      const typingBot=document.getElementById('typing-loader') as HTMLInputElement;
      typingBot.style.visibility="visible"
      setTimeout(() => {
        typingBot.style.visibility="hidden"
      }, 10000);
    }
    


  }

  
}
