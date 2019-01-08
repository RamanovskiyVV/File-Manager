import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import { FileService } from './file.service';
import { MessageComponent } from './message/message.component';




@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    ContextmenuComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
