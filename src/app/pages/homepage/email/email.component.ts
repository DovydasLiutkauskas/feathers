import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-homepage-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class HomepageEmailComponent {
  emailSubmitted: boolean = false;

  onSubmit(form: Form): void {
    this.emailSubmitted = true;
  }
}
