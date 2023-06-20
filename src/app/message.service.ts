import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 
  messages: String[] = [];

  getMessages(): String[]{
    return this.messages;
  }

  addMessage(message: String): void{
    this.messages.push(message);
  }

  clearMessages(): void{
    this.messages = [];
  }
}
