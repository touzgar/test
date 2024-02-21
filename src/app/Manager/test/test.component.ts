// test.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  value: string = "example@gmail.com";
  messageText: string = ""

  message() {
    // Update the message text when the button is clicked
    this.messageText = "Your message has been sent"; // You can update this message
  }
}
