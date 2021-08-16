import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Schools Covid19 Details', url: '/pag1', icon: 'mail' },
    { title: 'Public Health Unit', url: '/pag2', icon: 'paper-plane' },
    { title: 'Ongoing Outbreaks', url: '/pag3', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
