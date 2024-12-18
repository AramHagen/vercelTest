import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  getDocs,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Notification } from '../models/notification.model'
@Injectable({
  providedIn: 'root'
})
export class NotificatioApiService {
  private notificationsCollection = collection(this.firestore, 'notifications');
  constructor(private firestore: Firestore) { }

  // Get all notifications
  getAllNotifications(): Observable<Notification[]> {
    return from(getDocs(this.notificationsCollection)).pipe(
      map(querySnapshot =>
        querySnapshot.docs.map(doc => ({
          ...doc.data(), // Spread document data
          id: doc.id // Manually add `id` from the document reference
        }) as Notification)
      ),
      catchError(error => {
        console.error('Error getting documents:', error);
        throw error;
      })
    );
  }
}
