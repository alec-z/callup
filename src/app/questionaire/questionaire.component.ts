import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss']
})
export class QuestionaireComponent implements OnInit {
  questionaireForm;
  @Output() notify = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.questionaireForm = this.formBuilder.group({
      githubAccount: '',
      notice: false
    });
  }

  onCheckNotice() {
    // Process checkout data here
    console.warn('Your github account data:');
    this.notify.emit(this.questionaireForm.value);
  }

  ngOnInit() {

  }

}
