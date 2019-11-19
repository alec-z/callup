import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      weixin: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(contactData) {

  }



}
