import { Component, OnInit } from '@angular/core';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { EmailRequest } from 'src/app/model/EmailRequest.model';

@Component({
  selector: 'app-email-test',
  templateUrl: './email-test.component.html',
  styleUrls: ['./email-test.component.css']
})
export class EmailTestComponent implements OnInit {
  emailRequest: EmailRequest = {
    managerId: 10,
    eventId: 34,
    toEmails: [],
    subject: '',
    body: ''
  };

  constructor(private service: CalenderServiceService) {}
  emailRecipients: string = '';
  errorMessage: string = '';
  ngOnInit(): void {}

  sendEmail() {
    if (!this.emailRequest.managerId || !this.emailRequest.eventId || !this.emailRecipients || !this.emailRequest.subject) {
      this.errorMessage = 'You must fill in all the required fields.';
      setTimeout(() => {
        this.errorMessage = '';
      }, 1000); // Display the message for 2 seconds
      return; // Exit the function if validation fails
    }

    this.emailRequest.toEmails = this.emailRecipients.split(',');

    this.service.sendEmail(this.emailRequest).subscribe(
      (response) => {
        console.log('Emails sent successfully:', response);
      },
      (error) => {
        console.error('Failed to send emails:', error);
      }
    );
  }
}
