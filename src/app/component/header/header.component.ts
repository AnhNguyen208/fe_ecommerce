import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LocalStorageService } from '../../service/localStorage/local-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  username: string = "";
  authenticated: boolean = false;
  constructor(private localStorageService: LocalStorageService, private router: Router) { }
  
  ngOnInit(): void {
    const user = this.localStorageService.getData();
    console.log(user);
    if(user) {
      const data = JSON.parse(user);
      this.username = data.username;
      this.authenticated = data.authenticated;
    }

    this.localStorageService.dataChange.subscribe((value) => {
      if(value) {
        const data = JSON.parse(value);
        this.username = data.username;
        this.authenticated = data.authenticated;
      }
    });
  }

  logout() {
    this.localStorageService.removeData();
    this.username = "";
    this.authenticated = false;
  }
}
