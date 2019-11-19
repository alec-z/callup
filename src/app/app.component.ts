import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'call-up';
  githubAccount;
  onGithubAccountChanged(questionaire) {
    this.githubAccount = questionaire.githubAccount;

  }
}
