import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private fileService: FileService) { }

  Close(){
    this.fileService.isError = false;
  }
  ngOnInit() {
  }

}
