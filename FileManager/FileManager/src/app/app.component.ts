import { Component } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  path:string;
  constructor(private fileService: FileService)
  {
    this.path= fileService.currentPath;
  }
}
