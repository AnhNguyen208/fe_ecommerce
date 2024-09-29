import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';                   
import { HttpClientModule } from '@angular/common/http';    
import { FormsModule } from '@angular/forms';               

import { AppComponent } from './app.component';             
import { BookService } from './service/book/book.service';
import { BookComponent } from './component/book/book.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [   
    AppComponent,   
    BookComponent
  ],
  imports: [        
    BrowserModule,  
    HttpClientModule,  
    FormsModule, 
    RouterLink
  ],
  providers: [      
    BookService
  ],
  bootstrap: [AppComponent]  
})
export class AppModule { }
