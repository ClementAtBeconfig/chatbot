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
      divMessageUtilisateur.setAttribute("style" , "padding: 0.5rem 2rem 0.7rem;border-radius: 10px 10px 10px 0;background:  #3764ed;margin-top: 1rem;font-size: medium;position: absolute;right: 5%;color: #fff;font-family: Arial, Helvetica, sans-serif;width: auto;max-width: 70%;box-sizing: border-box;");

      const contenuMessages = document.querySelector('.discussion')as HTMLInputElement;
      contenuMessages.style.visibility="visible";
      
      contenuMessages.appendChild(divMessageUtilisateur);
      const typingBot=document.getElementById('typing-loader') as HTMLInputElement;
      this.chatBot(texte);
      typingBot.style.visibility="visible"
      setTimeout(() => {
        typingBot.style.visibility="hidden"
      }, 10000);
 
    }
  }
  chatBot(texte:string){
    if(texte == "bonjour" || texte == "Bonjour" || texte == "salut" || texte== "Salut"){
      const botMessage = document.createElement('div');
      botMessage.className = "messages";
      botMessage.setAttribute("style" , "padding: 0.5rem 2rem 0.7rem;border-radius: 10px 10px 10px 0;background: rgba(0, 0, 0, 0.3);margin-top: 1rem;font-size: medium;position: relative;left: 5%;color: #fff;font-family: Arial, Helvetica, sans-serif;width: auto;max-width: 70%;box-sizing: border-box;");
      botMessage.textContent = "Bonjour , comment allez-vous ?";
      const contenuMessages = document.querySelector('.discussion')as HTMLElement;
      contenuMessages.appendChild(botMessage);

    }

  }
  

  
}
