import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackgroundImageService } from 'src/app/shared/services/background-image.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  contactUsForm!: FormGroup;
  subjectCount: number = 0;
  messageCount: number = 0;
  formSubmited: boolean = false;
  secondsLeft = 5;
  interval!: any;
  constructor(
    private backgroundService: BackgroundImageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.backgroundService.changeBackgroundImage('contact');
    this.contactUsForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.maxLength(500),
      ]),
      newsletter: new FormControl(1),
    });
  }

  onSubmit() {
    this.formSubmited = true;
    this.interval = setInterval(() => this.countdown(), 1000);
  }

  countdown() {
    this.secondsLeft--;
    if (this.secondsLeft === 0) {
      this.router.navigate(['/home']);
    }
  }

  updateSubjectCount(event: any) {
    this.subjectCount = event.target?.value?.length;
  }

  updateMessageCount(event: any) {
    this.messageCount = event.target.value.length;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
