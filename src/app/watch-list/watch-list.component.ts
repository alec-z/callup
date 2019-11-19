import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  faCoffee = faCoffee;
  faStar = faStar;
  private _githubAccount;
  repositories;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  @Input()
  set githubAccount(githubAccount: string) {
    this._githubAccount = (githubAccount && githubAccount.trim()) || '';
    console.warn(this._githubAccount);
    this.repositories = this.http.get(`/api/watchlist?githubAccount=${this._githubAccount}`);
  }
  get githubAccount() {
    return this._githubAccount;
  }

}
