import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  users: any[];
  hasPermission = false;

  constructor() { }

  ngOnInit() {
    if (this.hasPermission) {
      this.getUsers()
        .then(users => this.users = users)
        .catch(e => console.log(e.message));
    } else {
      this.users = [];
    }
  }

  async getUsers() {
    return [
      { name: 'TungDo', email: 'tungdo@gmail.com' },
      { name: 'TungDo1', email: 'tungdo1@gmail.com' }
    ];
  }

}
