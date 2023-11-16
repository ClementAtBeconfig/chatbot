import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'chat-bot-test',
  templateUrl: './chatbot-test.part.html',
  styleUrls: ['./chatbot-test.part.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ChatBotTestPart {
  static API_KEY = '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';
  
  displayBot() {
    const chat = document.getElementById('chat') as HTMLInputElement;
    chat.style.display = 'block';
    const displayBot = document.getElementById(
      'displayBot'
    ) as HTMLInputElement;
    displayBot.style.display = 'none';
  }

  closeChat() {
    const chat = document.getElementById('chat') as HTMLInputElement;
    chat.style.display = 'none';
    const displayBot = document.getElementById(
      'displayBot'
    ) as HTMLInputElement;
    displayBot.style.display = 'block';
    const notif = document.getElementById('notif') as HTMLInputElement;
    notif.style.display = 'none';
  }
  messageSubmit() {
    const message = document.getElementById(
      'messageContainer'
    ) as HTMLInputElement;
    const texte = message.value.trim();
    message.value = '';

    if (texte !== '') {
      const divMessageUtilisateur = document.createElement('div');
      divMessageUtilisateur.className = 'messages-user';
      divMessageUtilisateur.textContent = texte;
      divMessageUtilisateur.setAttribute(
        'style',
        'padding: 0.7rem 0.5rem 0.5rem;border-radius: 10px 10px 0 10px;background: #3764ed;margin-bottom: 1rem;position: relative;text-align: right;right: -72%;color: #fff;font-family: Arial, Helvetica, sans-serif;font-size: medium;width: auto;max-width: 70%;box-sizing: border-box;overflow: hidden;word-wrap: break-word;width:20%'
      );

      const contenuMessages = document.querySelector(
        '.discussion'
      ) as HTMLInputElement;
      contenuMessages.style.visibility = 'visible';

      contenuMessages.appendChild(divMessageUtilisateur);
      const typingBot = document.getElementById(
        'typing-loader'
      ) as HTMLInputElement;  
      typingBot.style.visibility = 'visible';
      this.generateReponse(texte).then((data:any ) =>{
        const content = data.choices[0].message.content;
        setTimeout(() => {
        this.chatBot(content)
        typingBot.style.visibility = 'hidden';
      }, 1000);
      })
    }
  }

  chatBot(texte: string) {
    const botMessage = document.createElement('div');
    botMessage.className = 'messages';
    botMessage.textContent=texte;
    botMessage.setAttribute(
      'style',
      'display: block;padding: 0.5rem 2rem 0.7rem;border-radius: 10px 10px 10px 0;background: rgba(0, 0, 0, 0.3);margin-top: 1rem;font-size: medium;position: relative;left: 5%;color: #fff;font-family: Arial, Helvetica, sans-serif;width: auto;max-width: 70%;box-sizing: border-box;'
    );

    const contenuMessages = document.querySelector(
      '.discussion'
    ) as HTMLElement;
    contenuMessages.appendChild(botMessage);
  }

  public generateReponse(texte: string): Promise<object> {
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ChatBotTestPart.API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: texte }],
      }),
    };

    return fetch(API_URL, requestOptions).then(res=>res.json());
  }
}
