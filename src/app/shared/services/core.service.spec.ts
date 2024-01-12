import { Injectable, WritableSignal, signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CoreService {
  isLoading: WritableSignal<boolean> = signal(false);
  constructor() { }
}