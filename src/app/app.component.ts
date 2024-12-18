import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificatioApiService } from './services/notificatio-api.service';
import { Notification } from './models/notification.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],  // Use CommonModule here in the component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vercelTest';
  notifications: Notification[] = [];
  constructor(private notificatioApiService: NotificatioApiService) { }

  ngOnInit(): void {
    this.notificatioApiService.getAllNotifications().subscribe(result => {
      if (result) {
        this.notifications.push(...result);
      }
    })
  }
}
