import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageKey = 'user';
  public dataChange: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this.getData());

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if(typeof window !== 'undefined') {
      window.addEventListener('storage', this.handleStorageChange.bind(this));
    }
  }

  setData(value: string) {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, value);
      this.dataChange.next(value);
    }
  }

  getData(): string | null {
    if(isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.storageKey);
    } 

    return null;
  }

  removeData() {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.storageKey);
    }
  }

  private handleStorageChange(event: StorageEvent) {
    if (event.key === this.storageKey) {
      this.dataChange.next(event.newValue); 
    }
  }
}
