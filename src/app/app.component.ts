import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AppComponent {
  message: string = '';
  messages: { text: string; received: boolean }[] = [
    { text: 'Oi, tudo bem?', received: true },
    { text: 'Como posso ajudar?', received: true },
  ];

  sendMessage() {
    if (this.message.trim()) {
      this.messages.push({ text: this.message.trim(), received: false });
      this.message = '';
    }
  }
}
